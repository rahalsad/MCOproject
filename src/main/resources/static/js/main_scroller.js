isMobile: navigator.userAgent.match(/iPad|iPhone|iPod|Android|Samsung/ig)
!(function () {
    var bp = {};
    bp = {
        dom: {
            globalContainer : $('.global_container'),
            contentContainer : $('.content_container'),
            asideMenu : $('.sidebar_menu > ul'),
            menuFirstLevelItems : $('.sidebar_menu > ul > li > a'),
            menuSecondLevelItems : $('.sub_menu.first_level > ul > li > a'),
            tabsItems : $('.onglets_list li a'),
            tabsContentItems : $('.classement_blocks > li'),
            rowsBar : $('.table_with_left_bars tbody tr'),
            greyDropDown : $('.greydropdown'),
            searchShowBtn : $('.search_btn_show button'),
            searchShowBtnMobile : $('#mobile_search'),
            searchBarArea : $('.search_area'),
            searchDirectAccess : $('.direct_access'),
            searchDirectAccessClose : $('.direct_access_close'),
            langSwitcher : $('.lang_btn'),
            langSwitcherList : $('.lang_list'),
            langSwitcherLinks : $('.lang_list a'),
            toolsHasChild : $('.has_child'),
            monthsAgendaList : $('.agenda_months_list li a'),
            FilterListe : $('#contract_filter'),
            shartShowBtn : $('button.shart_show_btn'),
            popinContainer : $('.modal_container'),
            popinButton : $('.popin_btn'),
            popinBackdrop : $('.modal-backdrop'),
            popinClose : $('.hide_popin'),
            floatedLinks : $('.floated_links')
        },
        vars: {
            isMobile : navigator.userAgent.match(/Android|iPhone|iPod|BlackBerry|Opera Mini|IEMobile/i)
        },
        init: function () {
            this.tabsAction();
            //this.scrollToEffect();
            this.EvolutionChart();
            this.costumDropDown();
            this.showHideSearchBar();
            this.langSwitcher();
            this.showHideToolsChildMenu();
            this.filterContracts();
            this.pageSmallMenu();
            this.priceFormat();
            this.showHideChart();
            this.popinActions();
            this.floatedLinksActions();
            this.contentScroller();
            $(window).scroll(this.onScrollActions);
            $(window).resize(this.pageSmallMenu, this.contentScroller);
            $( "#datepicker1" ).datepicker({
                    //minDate : makeDate,
                    maxDate: 0,
                    inline: true,
                    dateFormat: "dd.mm.yy",
                    onSelect: function (date) {
                        var date2 = $('#datepicker1').datepicker('getDate');
                        date2.setDate(date2.getDate());
                        //$('#datepicker2').datepicker('setDate', date2);
                        //sets minDate to dt1 date + 1
                        $('#datepicker2').datepicker('option', 'minDate', date2);
                    }
                });

                $( "#datepicker2" ).datepicker({
                    //minDate : makeDate,
                    maxDate: 0,
                    inline: true,
                    dateFormat: "dd.mm.yy",
                    onSelect: function (date) {
                        var date1 = $('#datepicker2').datepicker('getDate');
                        date1.setDate(date1.getDate());
                        //$('#datepicker1').datepicker('setDate', date1);
                        //sets minDate to dt1 date + 1
                        $('#datepicker1').datepicker('option', 'maxDate', date1);
                    },
                    onClose: function () {
                        var dt1 = $('#datepicker1').datepicker('getDate');
                        console.log(dt1);
                        var dt2 = $('#datepicker2').datepicker('getDate');
                        if (dt2 <= dt1) {
                            var minDate = $('#datepicker2').datepicker('option', 'minDate');
                            $('#datepicker2').datepicker('setDate', minDate);
                        }
                    }
                });
        },

        pageSmallMenu: function () {
            console.log('Taille Window : ', $(window).width())
            console.log('Taille menu : ', $('.main_menu').width())
            var i = 0;
            var ML = 0;
            var ML_items = 0;
            var windowsWidth = $(window).width();
            var menuOngletsWidth = $('.main_menu').width();
            // var diffWidths = windowsWidth - menuOngletsWidth;
            var slidesNum = Math.floor( menuOngletsWidth / windowsWidth );

            console.log('slide numbers : ', slidesNum)

            if ( windowsWidth < menuOngletsWidth ) {
                $('.mobile_next_items').show();
            }else{
                $('.mobile_next_items').hide();
            }

            $('.mobile_next_items').on('click', function(){
                console.log('i ==>', i)
                console.log('li == >', $('.main_menu li').length)
                if (i < slidesNum) {
                    ML_items += $('.main_menu li').eq(i).outerWidth() + $('.main_menu li').eq(i + 1).outerWidth() + $('.main_menu li').eq(i + 2).outerWidth()
                    $('.main_menu').css('margin-left', - ML_items);
                    i += 1;
                    // $('.main_menu').css('margin-left', - (windowsWidth * i) + 30);
                    if (i >= slidesNum) {
                        $(this).addClass('lastClick');
                    }
                }else{
                    $(this).removeClass('lastClick');
                    i = 0;
                    ML_items = 0;
                    $('.main_menu').css('margin-left', 0);
                }

                // if ( i < $('.main_menu li').length - 1) {
                //     ML += $('.main_menu li').eq(i).outerWidth();
                //     $('.main_menu').css('margin-left', - ML - 5);
                //     i += 1;
                // }else{
                //     return false;
                // }

            })
        },
        EvolutionChart: function () {
            if ($('#evolution_chart').length) {
                var ycategories = ['0', '2.5k', '5k', '7.5k', '10k', '12.5k', '15k'];
                var chart = $('#evolution_chart').highcharts({
                chart: {
                    spacingBottom: 0,
                    spacingTop: 10,
                    spacingLeft: 0,
                    spacingRight: 10,
                    height: 300,
                    plotBackgroundColor: "#f7f6f5"
                },
                xAxis: {
                    type: "datetime",
                    tickInterval:  86400000 * 31 ,
                    endOnTick: true,
                    showFirstLabel: false,
                    startOnTick: false,
                    showLastLabel: true,
                    tickmarkPlacement: 'on',
                    categories: ['Dec', 'Jan', 'Fev'],
                    labels: {
                        align: 'left',
                        x: -19,
                        y: 6,
                        useHTML: true,
                        formatter: function() {
                            return '<span class="hc-label">' + Highcharts.dateFormat('%b', this.value) + '</span>';
                        }
                    },
                    crosshair: {
                        color: '#D8D8D8',
                        dashStyle: "Solid",
                        snap: true,
                        width: 1,
                        zIndex: 2
                    },
                    tickLength: 20,
                    gridLineWidth: 1,
                    lineColor: '#4d4b49',
                    lineWidth: 1
                },
                title: {
                    text: null
                },
                yAxis:{
                    plotBands: [{
                        color: '#f7f6f5',
                        from: 8,
                        to: 0
                    }],
                    gridLineWidth: 1,
                    tickInterval: 500,
                    tickmarkPlacement: 'on',
                    // categories: ycategories,
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function () {
                            if (this.value >= 1000 ) {
                                this.value = (this.value / 1000)
                                return (this.value) + 'K';
                            }else{
                                return this.value;
                            }

                        }
                    },
                    tickLength: 20,
                    gridLineWidth: 1,
                    lineColor: '#4d4b49',
                    lineWidth: 1
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    formatter: function() {
                        return '<span class="chart_y">'+ this.y +' MAD</span> '+'<br><span class="chart_x">au '+Highcharts.dateFormat('%e.%m.%Y',this.x)+'</span>';
                    },
                    valueSuffix: 'MAD',
                    backgroundColor: "#4d4d49",
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    style: {
                        padding: "10px",
                        color: "#fff"
                    }
                },
                plotOptions: {
                    grouping: false,
                    pointPadding: 0.2,
                    borderWidth: 0,
                    stacking: 'normal',
                    series: {
                        animation: {
                            duration: 2000,
                            easing: 'easeOutBounce'
                        }
                    }
                },
                series: [{
                    cursor: 'pointer',
                    color: '#854e56',
                    allowPointSelect: true,
                    marker: {
                        fillColor: '#fff',
                        lineWidth: 2,
                        radius: 6,
                        lineColor: '#854e56',
                        states: {
                            select: {
                                fillColor: '#854e56',
                                radius: 8,
                                lineColor: '#854e56',
                                lineWidth: 2
                            }
                        }
                    },
                    data: [
                        [Date.parse('11/01/2015'), 500],
                        [Date.parse('11/08/2015'), 900],
                        [Date.parse('11/15/2015'), 100],
                        [Date.parse('11/21/2015'), 100],
                        [Date.parse('12/01/2015'), 600],
                        [Date.parse('12/08/2015'),1700],
                        [Date.parse('12/15/2015'), 2500],
                        [Date.parse('12/21/2015'), 1300],
                        [Date.parse('01/01/2016'), 1000],
                        [Date.parse('01/08/2016'), 2000],
                        [Date.parse('01/15/2016'),1900],
                        [Date.parse('01/21/2016'), 1500],
                        [Date.parse('02/01/2016'), 2000]
                    ],
                    type: 'line',
                    lineWidth: 2,
                    stickyTracking: false,
                    dataGrouping: {
                        approximation: "sum",
                        enabled: true,
                        units: [ ['week',[1]] ]
                    }
                }]
                });
            };
        },
        costumDropDown: function () {
            bp.dom.greyDropDown.chosen();
        },
        showHideChart: function () {
            if (bp.vars.isMobile || $(window).width() <= 768) {
                console.log(bp.vars.isMobile)
                setTimeout(function(){
                    $('#operation').hide()
                },300)
            };
            bp.dom.shartShowBtn.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $('#operation').removeClass('active')
                }else{
                    $(this).addClass('active')
                    $('#operation').addClass('active')
                }
            });
        },
        popinActions : function(){
            bp.dom.popinButton.on('click', function(){
                bp.dom.popinContainer.attr('id', $(this).attr('data-target')).show(300);
                bp.dom.popinBackdrop.show();
            })
            bp.dom.popinClose.on('click', function(){
                bp.dom.popinContainer.hide(300);
                bp.dom.popinBackdrop.hide();
            })
        },
        showHideToolsChildMenu: function () {
            bp.dom.toolsHasChild.on('click', function(){
                $(this).toggleClass('active');
                return false;
            });
        },
        priceFormat: function () {
            $('.priceFormat').priceFormat({
                prefix: '',
                suffix: ' MAD',
                centsSeparator: ',',
                thousandsSeparator: ' '
            });
        },
        langSwitcher: function () {
            bp.dom.langSwitcher.on('click', function(){
                bp.dom.langSwitcherList.toggleClass('active');
                return false;
            });
            bp.dom.langSwitcherLinks.bind('click', function(e){
                var defaultLang = bp.dom.langSwitcher.attr('data-lang');
                var chosenLang = $(this).attr('data-lang');

                bp.dom.langSwitcher.html(chosenLang);
                $(this).html(defaultLang);

                bp.dom.langSwitcher.attr('data-lang', chosenLang);
                $(this).attr('data-lang', defaultLang);

                $("[data-translate]").jqTranslate('demo',{forceLang : chosenLang});


                bp.dom.langSwitcherList.toggleClass('active');
                e.preventDefault();
            });
        },
        showHideSearchBar: function () {
            bp.dom.searchShowBtn.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    bp.dom.searchShowBtnMobile.removeClass('active');
                    bp.dom.searchBarArea.fadeOut(100);
                }else{
                    $(this).addClass('active');
                    bp.dom.searchShowBtnMobile.addClass('active');
                    bp.dom.searchBarArea.fadeIn(100);

                }
            })
            bp.dom.searchShowBtnMobile.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    bp.dom.searchShowBtn.removeClass('active');
                    bp.dom.searchBarArea.fadeOut(100);
                    $('.purple_profil_info_global, .yellow_menu_content').show();
                    $('.content_container').removeClass('searchbar_active');
                }else{
                    $(this).addClass('active');
                    bp.dom.searchShowBtn.addClass('active');
                    bp.dom.searchBarArea.fadeIn(100);
                    $('.purple_profil_info_global, .yellow_menu_content').hide();
                    $('.content_container').addClass('searchbar_active');
                }
            })
        },
        tabsAction: function () {
            bp.dom.tabsItems.on('click', function(e){
                bp.dom.tabsItems.removeClass('active');
                $(this).addClass('active');
                bp.dom.tabsItems.parent('li').removeClass('active');
                $(this).parent('li').addClass('active');
                bp.dom.tabsContentItems.hide();
                bp.dom.tabsContentItems.removeClass('active');
                bp.dom.tabsContentItems.eq($(this).parent('li').index()).fadeIn(300);

                e.preventDefault();
            })
        },
        floatedLinksActions: function () {
            bp.dom.floatedLinks.on('mouseover', function(){
                console.log($(this));
                $(this).stop().animate({'right': '0'}, 200).removeClass('cached')
            })
            .on('mouseleave', function(){
                console.log($(this));
                $(this).stop().animate({'right': '-228px'}, 200).addClass('cached')
            })
        },
        filterContracts : function() {
            if (bp.vars.isMobile) {
                $('#contract_filter').on('change', function(){
                    if ($(this).val() == 'all') {
                        $('.docs_list li').show(300);
                    }else{
                        $('.docs_list li').not('li[data-type=' + $(this).val() + ']').hide(300);
                        $('.docs_list li[data-type=' + $(this).val() + ']').show(300)
                    }
                })
            }else{
                bp.dom.FilterListe.chosen({
                    width: "180px",
                    placeholder_text_multiple : "",
                    display_selected_options : false

                })
                .change(function(e, params){
                    // params.selected and params.deselected will now contain the values of the
                    // or deselected elements.
                    if (params.selected == 'all') {
                        $('.docs_list li').show(300);

                    }else{
                        $('.docs_list li').not('li[data-type=' + params.selected + ']').hide(300);
                        $('.docs_list li[data-type=' + params.selected + ']').show(300)

                    }
                    console.info(params.selected)

                });
            }
        },
        contentScroller : function() {
            if (bp.dom.contentContainer.length) {
                var containerOffsetTop = bp.dom.contentContainer.offset().top;
                var windowHeight = $(window).height()
                var containerHeight = windowHeight - containerOffsetTop - 20;
                console.log(containerOffsetTop)

    bp.dom.contentContainer.css('height',containerHeight )
            };
        }


    };

//call init function on document ready
    $(function () {
        bp.init();
    });
})
(window.jQuery);


