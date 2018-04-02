jQuery('#vent-form').on('submit', (e) => {
  e.preventDefault();
  const template = jQuery('#vent-template').html();
  const vent = jQuery('[name=ventTextBox]').val()
  const html = Mustache.render(template, {
    vent: vent
  });
  jQuery('[name=ventTextBox]').val('');
  jQuery('#vents').append(html);
});

jQuery('#removeVents').click(function () {
  jQuery('#vents').empty();
});
