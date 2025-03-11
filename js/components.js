

function change_tab_content(index, btn_ele, tab_contents) {
    $j(btn_ele).parent().addClass("list-selected").siblings().removeClass("list-selected");
    $j("#" + tab_contents + " .tab-content").eq(index).show().siblings().hide();
}



var dropdown = {
    toggle_dropdown: function(button_ele, option_ele, cus_width, cus_max_height) {
		if(option_ele != null) {
            var option_val = $j(option_ele).attr("data-value");
            var action_btn = $j(".dropdown-btn-common[data-field='test-dropdown']");
            
            if (action_btn) { $j(action_btn).find(".btn-value").text(option_val); }
			$j('.dropdown-opened').removeClass('dropdown-opened');
            dropdown.listen_close_dropdown();
        } else if (button_ele != null) {
            var data_field = $j(button_ele).attr("data-field");
            dropdown_container = $j(".dropdown-options-container[data-field='"+ data_field + "']");

			var window_width = $j(window).width();
            var window_height = $j(window).height();
		
	        /// button or link element props
                var ele_width = $j(button_ele).outerWidth();
                var ele_height = $j(button_ele).outerHeight();
                var ele_position = $j(button_ele).offset();
                var ele_left = ele_position.left;
                var ele_top = ele_position.top;
	        /// \\\ button or link element props
			
            
            /// popup props
                var pop_width = cus_width ? cus_width : ele_width;
                var pop_max_height = cus_max_height ? cus_max_height : 200;
                var pop_left = ele_left;
                var pop_window_space = 20;
            
                // left calculation
                if ((window_width - ele_left) < (pop_width + pop_window_space)) { pop_left = (pop_left) - (pop_width - ele_width); }
                
                // setting width, left
                dropdown_container.css({ width: pop_width, left: pop_left });
                
                // top position
                    var ele_top_space = ele_top;
                    var ele_bottom_space = (window_height) - (ele_top + ele_height);
                    var enough_bottom_space = (ele_bottom_space) > (pop_max_height + pop_window_space);
                    var enough_top_space = (ele_top_space) > (pop_max_height + pop_window_space);
                    var pop_top = ele_top + ele_height;
                    
                    dropdown_container.css({ top: pop_top, bottom: "" }); //No I18N
                
                    if (enough_bottom_space === false) {
                        var ddown_min_height = 150;

                        if ((ele_bottom_space) > (ddown_min_height + pop_window_space)) {
                            pop_max_height = ele_bottom_space - pop_window_space;
                        } else {
                            var pop_bottom = ele_bottom_space + ele_height;
                            dropdown_container.css({ top: "", bottom: pop_bottom }); //No I18N
                            
                            if (enough_top_space === false) {
                                pop_max_height = ele_top_space - pop_window_space;
                            }
                        }
                    }
                    
                    dropdown_container.css({ "max-height": pop_max_height }); //No I18N
                /// \\\ top position
	        /// popup props


            dropdown.listen_close_dropdown();
			$j(dropdown_container).toggleClass("dropdown-opened");
			$j(button_ele).toggleClass("dropdown-opened");
			event.stopPropagation();
		}
    },

	listen_close_dropdown: function() {
        if (!$j(event.target).closest('.dropdown-options-container').length) {
            $j('.dropdown-opened').removeClass('dropdown-opened');
        }
	}
}



function add_task() {
    var input_val = $j("#task-input").val();

    if (input_val) {
        $j('#task-lists').append('<li>' + input_val + '</li>');
        $j('#task-input').val('');
    } else {
        alert("Please enter a task.");
    }
}


