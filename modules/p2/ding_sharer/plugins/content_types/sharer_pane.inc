<?php

/**
 * @file
 * Ding Serendipity CTools plugin file.
 */

/**
 * Plugin description.
 */
$plugin = array(
  'title' => t('Ding sharer pane'),
  'description' => '',
  'single' => TRUE,
  'edit form' => 'ding_sharer_content_type_edit_form',
  'render callback' => 'ding_sharer_content_type_render',
  'category' => t('Ding!'),
  'defaults' => array(
    'share_type' => 'normal',
  ),
);

/**
 * Implements hook_content_type_render().
 */
function ding_sharer_content_type_render($subtype, $conf, $panel_args, $context) {
  drupal_add_js(drupal_get_path('module', 'ding_sharer') . '/ding-sharer.js');
  drupal_add_css(drupal_get_path('module', 'ding_sharer') . '/ding-sharer.css');

  $output = new stdClass();

  $output->content = '';

  // Check if anonymous users have access to current page,
  // if not, then not much point in being able to share it.
  $item = menu_get_item();
  $item['map'][1]->data->uid = 0;
  _menu_check_access($item, $item['map']);
  $access = $item['access'];

  if ($access) {
    $output->content = array(
      '#theme' => 'ding_sharer',
      '#label' => t('Share this list'),
      '#communities' => array_map('ucfirst', $conf['communities']),
      '#type' => $conf['share_type'],
    );
  }

  return $output;
}

/**
 * Implements hook_content_type_edit_form().
 */
function ding_sharer_content_type_edit_form($form, &$form_state) {
  $form['communities'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Communities'),
    '#options' => array(
      'facebook' => 'Facebook',
      'twitter' => 'Twitter',
    ),
    '#default_value' => $form_state['conf']['communities'],
  );
  $form['share_type'] = array(
    '#type' => 'radios',
    '#title' => t('Display type'),
    '#options' => array(
      'normal' => 'Normal',
      'buttons' => 'Buttons',
    ),
    '#default_value' => $form_state['conf']['share_type'],
  );

  return $form;
}

/**
 * Implements hook_content_type_edit_form_submit().
 */
function ding_sharer_content_type_edit_form_submit($form, &$form_state) {
  $form_state['conf']['communities'] = array_filter($form_state['values']['communities']);
  $form_state['conf']['share_type'] = $form_state['values']['share_type'];
}
