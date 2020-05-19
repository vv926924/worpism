jQuery(function() {

	function OcultarFrm(base, encontrado) {
		if(encontrado){
			jQuery('.form-group.custom-field').not(base).each(function() {
				var sort = jQuery(this).data('sort');
				if (sort > 110 && sort <= 220) {
					jQuery(this).hide().find('.form-control,.formcontrol').val(function() {
						var regresa = '';
						jQuery(this).data('oldValue', jQuery(this).val());
						if (jQuery(this).data('oldValue')) return jQuery(this).data('oldValue');
						switch (jQuery(this).attr('name')) {
							case 'custom_field[130]':
							case 'custom_field[account][130]':
							case 'personal_details[custom_field][account][130]':
								regresa = 'XAXX010101000';
								break;
							case 'custom_field[160]':
							case 'custom_field[account][160]':
							case 'personal_details[custom_field][account][160]':
								regresa = '';
								break;
							case 'custom_field[210]':
							case 'custom_field[account][210]':
							case 'personal_details[custom_field][account][210]':
								regresa = '00000';
								break;
							case 'custom_field[220]':
							case 'custom_field[account][220]':
							case 'personal_details[custom_field][account][220]':
								regresa = '132';
								break;
							default:
								regresa = 'NA';
								break;
						}
						return regresa;
					});
				}
			});
		}
	}

	function MostrarFrm(base){
		jQuery('.form-group.custom-field').not(base).removeClass('hide').show().find('.form-control,.formcontrol').each(function() {
			var placeholders = [
				'XAXX010101000',
				'00000',
				'NA'
			];
			var oldValue = jQuery(this).data('oldValue');
			if (jQuery.inArray(oldValue, placeholders) === -1) {
				jQuery(this).val(oldValue);
			} else {
				jQuery(this).val('');
			}
		});
	}

	if (jQuery('.form-group.custom-field[data-sort="110"]').length > 0) {
		var base = jQuery('.form-group.custom-field[data-sort="110"]');
		var check = base.find('input[type=radio][value=100]').trigger('click').attr('checked', true).trigger('change');
		base.find('input[type=radio]').on('change',function() {
			if (jQuery(this).val() == 100) {
				OcultarFrm(base, true);
			} else {
				MostrarFrm(base);
			}
		});
		jQuery('.form-group.custom-field').not(base).find('.form-control,.formcontrol').each(function() {
			jQuery(this).data('oldValue', jQuery(this).val());
		});
		jQuery(this).one('ajaxStop', function() {
			if (base.find('input[type=radio]:checked').length) {
				base.find('input[type=radio]:checked').trigger('change');
			} else {
				base.find('input[type=radio][value=100]').prop('checked', true).trigger('change');
			}
		});
		jQuery.get('index.php?route=common/cart/info');
	}
	else{
		var base = '';
		OcultarFrm(base, false);
	}
});