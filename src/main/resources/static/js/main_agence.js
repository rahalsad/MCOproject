(function () {
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
            links_btn : $('.links_btn'),
            link_list : $('.link_list'),
            langSwitcherList : $('.lang_list'),
            langSwitcherLinks : $('.lang_list a'),
            toolsHasChild : $('.option_list .has_child'),
            toolsMenuAction : $('.menu_action'),
            notificationCloseBtn : $('.note_close'),
            monthsAgendaList : $('.agenda_months_list li a'),
            FilterListe : $('#contract_filter'),
            FilterListeType : $('.general_filter_type'),
            shartShowBtn : $('button.shart_show_btn'),
            popinContainer : $('.modal_container'),
            popinButton : $('.popin_btn'),
            popinBackdrop : $('.modal-backdrop'),
            popinClose : $('.hide_popin'),
            floatedLinks : $('.floated_links'),
            moins : $('#moins'),
            plus : $('#plus'),
            carnetValeur : $('#carnetValeur'),
            toolTipItems : $('.tooltip'),
            mySlickSlider : $('.mySlickSlider'),
            connectTabsShow : $('#connect_btns'),
            tutoSlider : $('.tutoSlider'),
            selectTable : $('#PaimentChoixChekbox td.select-checkbox'),
            radioTable : $('#PaimentChoixRadio td.select-checkbox'),
            messageConfirmer : $('[data-message="message_confirmer"]'),
            confirmerSms : $('[data-confirmation="confirmation-sms"]'),
            transferLists : $('.transfer_accounts'),
            remplirformulaire: $('.top_show_form .carnet_container'),
            remplir_formulaire:$('.remplir_formulaire'),
            choix_compte_bp:$('.choix_compte_bp'),
            afficher_libelle:$('.favoris_etape_wrapper label'),
            afficher_libelle_1:$('.favoris_etape_wrapper label'),
            editFavListBtn : $('.edit_fav_list'),
            closeEditionBtn : $('.close_edition_btn'),
            deleteFavLink : $('.delete_fav_link'),
            scrollToBtn : $('.scrollto'),
            mobileMenuBtn : $('#ticket-min'),
            mobileMenuList : $('.mobile_mainMenu'),
            mobileMenuChild : $('.menu_item_child'),
            mobileMenuCloser : $('.close_menuMobile'),
            mobileMenuBack : $('.back_menuMobile'),
            selectCompteItem : $('.select_compteItem'),
            showAllComptesBtn : $('.tous_comptes_btn'),
            showTableDetailBtn : $('.btn_show')

        },
        vars: {
            isMobile : navigator.userAgent.match(/Android|iPhone|iPod|BlackBerry|Opera Mini|IEMobile/i),
            messages: {
                fr :{
                    lengthMenu: "Display -- records per page",
                    zeroRecords: "Aucun résultat ne correspond à  vos critères de recherche",
                    infoEmpty: "Aucune opération n'est enregistrée"
                }
            },
            flag : false,
            seriesVisible : 0
        },
        init: function () {
            this.scrollTo();
            this.tabsAction();
            //this.scrollToEffect();
            this.MultiEvolutionChart();
            this.costumDropDown();
            this.showHideSearchBar();
            this.langSwitcher();
            this.showHideToolsChildMenu();
            this.showHideToolsMenuAction();
            this.filterContracts();
            this.filterType();
            this.pageSmallMenu();
            this.priceFormat();
            this.showHideChart();
            this.popinActions();
            this.simulatorsActions();
            this.floatedLinksActions();
            this.contentScroller();
            this.search_btn_click();
            this.dropDown_Actions();
            this.carnetControls();
            this.dataTableFunctions();
            this.compteDates(); 
            this.backToUp();
            this.formatPrice();
            this.maskFormat();
            this.tableFilter();
            this.addCompte();
            this.accountsSlider();
            this.shoHideGeneralMenu();
            this.shoHideLinks();
            this.hightShartBtns();
            this.dateValiditeTransfer();
            this.hideShowErrorContact();
            this.mapsagence();



            data=[
            [Date.UTC(2016, 6, 23), 10000],
            [Date.UTC(2016, 6, 30), 40000],
            [Date.UTC(2016, 7, 2), 170000],
            [Date.UTC(2016, 7, 8), 6000],
            [Date.UTC(2016, 7, 20), -100000],
            [Date.UTC(2016, 7, 27),8000],
            [Date.UTC(2016, 7, 30), 12000000],
            [Date.UTC(2016, 8, 6), 1800],
            [Date.UTC(2016, 8, 9), 90000],
            [Date.UTC(2016, 8, 19), 99900],
            [Date.UTC(2016, 9, 1), 190000],
            [Date.UTC(2016, 9, 9), 200000],
            [Date.UTC(2016, 9, 14), 10000],
            ];
            data2=[
            [Date.UTC(2016, 6, 23), 10000],
            [Date.UTC(2016, 6, 30), 40000],
            [Date.UTC(2016, 7, 2), 170000],
            [Date.UTC(2016, 7, 8), 6000],
            [Date.UTC(2016, 7, 20), -100000],
            [Date.UTC(2016, 7, 27),8000],
            [Date.UTC(2016, 7, 30), 12000000],
            [Date.UTC(2016, 8, 6), 1800],
            [Date.UTC(2016, 8, 9), 90000],
            [Date.UTC(2016, 8, 19), 99900],
            [Date.UTC(2016, 9, 1), 190000],
            [Date.UTC(2016, 9, 9), 200000],
            [Date.UTC(2016, 9, 14), 10000],
            ];
            data3=[
            [Date.UTC(2016, 6, 23), 9990000],
            [Date.UTC(2016, 6, 30), 400000],
            [Date.UTC(2016, 7, 2), 170000],
            [Date.UTC(2016, 7, 8), 600000],
            [Date.UTC(2016, 7, 20), -10000],
            [Date.UTC(2016, 7, 27),800000],            
            [Date.UTC(2016, 8, 6), 180000],
            [Date.UTC(2016, 8, 9), 900000],
            [Date.UTC(2016, 8, 19), 99900],
            [Date.UTC(2016, 8, 30), 12000000],
            [Date.UTC(2016, 9, 1), 190000],
            [Date.UTC(2016, 9, 9), 200],
            [Date.UTC(2016, 9, 14), 9000],
            ];



            data4=[
            [Date.UTC(2016, 6, 23), 5550000],
            [Date.UTC(2016, 6, 30), 880000],
            [Date.UTC(2016, 7, 2), 970000],
            [Date.UTC(2016, 7, 8), 600000],
            [Date.UTC(2016, 7, 20), -1000],
            [Date.UTC(2016, 7, 27),80000],
            [Date.UTC(2016, 7, 30), 100000],
            [Date.UTC(2016, 8, 6), 441800],
            [Date.UTC(2016, 8, 9), 3390000],
            [Date.UTC(2016, 8, 19), 399900],
            [Date.UTC(2016, 9, 1), 90000],
            [Date.UTC(2016, 9, 9), 200000],
            [Date.UTC(2016, 9, 14), 810000],
            ];
            data5= [
            [Date.UTC(2016, 6, 23), 9900000],
            [Date.UTC(2016, 6, 30), 1880000],
            [Date.UTC(2016, 7, 2), 70000],
            [Date.UTC(2016, 7, 8), 6000],
            [Date.UTC(2016, 7, 20), 888000],
            [Date.UTC(2016, 7, 27),8000],
            [Date.UTC(2016, 7, 30), 1100000],
            [Date.UTC(2016, 8, 6), 111800],
            [Date.UTC(2016, 8, 9), 7690000],
            [Date.UTC(2016, 8, 19), 3399900],
            [Date.UTC(2016, 9, 1), 900000],
            [Date.UTC(2016, 9, 9), 20000],
            [Date.UTC(2016, 9, 14), 80000],
                ],



            $('.masked_field').click(function() {
    	        console.log("value:",this.value)
                var chartColor = $(this).parents('tr').attr('data-color');
                console.log('Chart color : ', chartColor)
    	        var chart = $('#evolution_chart_multi').highcharts(); // instance highchart
    	          var series = chart.series[this.value]; // call series
                  console.warn('series compte: ', chart.series.length)
    	          if(series){ //check if series already loaded
    	          //if series exist just hide or show series
                        if (series.visible) {
                            series.setVisible(false);

                        } else {
                            var serie_name='name_'+ Math.floor((Math.random() * 100) + 1);
                            console.log("serie_name",serie_name)
                            series.update({'name':serie_name})
                            series.setVisible(true,true);
                        }
    	          }else{
    	          // if new series draw new one
                        if(this.value==0) maindata=data;
                        if(this.value==1) maindata=data2;
                        if(this.value==3) maindata=data5;
                        if(this.value==2) maindata=data4;
                        var test=[];
                        console.log("data4",data4)
                        var period=$("#evolutions_sales").val();
                        console.log("period",period)
                        if(period!=""){
                        var currentDate = moment().format("DD/MM/YYYY");
                        var oldDate = moment().subtract(period, 'days').format("DD/MM/YYYY");
                        db_date=Date.UTC(moment(oldDate,"DD/MM/YYYY").year(), moment(oldDate,"DD/MM/YYYY").month(), moment(oldDate,"DD/MM/YYYY").date());
                        fn_date=Date.UTC(moment(currentDate,"DD/MM/YYYY").year(), moment(currentDate,"DD/MM/YYYY").month(), moment(currentDate,"DD/MM/YYYY").date());
                        for(i=0;i<maindata.length;i++){
                        console.log("maindata vs db_date" + maindata[i][0] +" vs " + db_date);
                        console.log("maindata vs fn_date" + maindata[i][0] +" vs " + fn_date);
                        if(maindata[i][0]>=db_date && fn_date>=maindata[i][0]){
                                console.log("data_solde", maindata[i].toString());                                
                                test.push(maindata[i])
                            }
                        }
                        }else{
                            test=maindata;
                        }
                        console.log("test",test)
                        var serie_name='name_'+ Math.floor((Math.random() * 100) + 1);
                        console.log(serie_name)
                        //console.log("evolution",$("#evolutions_sales").val());
                        chart.addSeries({                          	          
                            cursor: 'pointer',
                            color: chartColor,
                            allowPointSelect: true,
              	            name: serie_name,
                            color : chartColor,
                            marker: {
                                fillColor: '#fff',
                                lineWidth: 2,
                                radius: 6,
                                lineColor: chartColor,
                                states: {
                                    select: {
                                        fillColor: chartColor,
                                        lineColor: chartColor,
                                        radius: 8,
                                        lineWidth: 2
                                    }
                                }
                            },
              	           data: test
                        });
    	          }


                  // if (chart.series.length>1) {

                  // }
                  // for(var i = 0; i < chart.series.length; i++) {
                  //   if(chart.series[i].visible) {
                  //       console.info('Seriers visible : ',  chart.series[i])
                  //     bp.vars.seriesVisible++;
                  //   }
                  // }

                  // console.info('Seriers visible : ', bp.vars.seriesVisible)

        	});

            EvolutionChart2('evolution_chart',data2, $("#datepicker1").val(), $("#datepicker2").val(),12100000);


            this.edocDates();
            this.toolTipster();
            this.myTutoSlider();
            // this.slickSlider();
            this.commandCarteActive();
            this.connectTabsShow();
            
            this.accordion();

            // Mobile menu effects and functions
            this.mobileMenu();


            $(window).scroll(this.onScrollActions);
            $(window).resize(this.pageSmallMenu, this.contentScroller);
            // $(window).resize(this.mobileMenu);

            // to make a table multiSelect items.
            this.myselectTable();

            // To make a table one select item. 
            this.myradioTable();

            this.mymessageConfirmer();

            this.myconfirmerSms();
            this.accordiontable();

            this.remplirformulaire();
            this.remplir_formulaire();
            this.choix_compte_bp();
            this.afficher_libelle();
            this.afficher_libelle_1();

            // To Edit shortcuts list.
            this.editFavList();
            this.showTableDetail();

            // Manually customized dropdown (Dashboard).
            this.manuallyStyledDropDown();

            // To show all acocunts ine the liste above the chart (Dashboard).
            this.showAllComptes();
            this.chartDevise();
            this.chartValeurs();
            this.dateDevise();
            this.dateValeur();

            




            

        },
        scrollTo : function(){
            bp.dom.scrollToBtn.on('click', function(){
                if (bp.vars.isMobile) {
                    $('html, body').stop().animate({ scrollTop: $('#' + $(this).attr('data-target')).offset().top - 60 },600);
                }else{
                    $('.content_container').stop().animate({ scrollTop: $('#' + $(this).attr('data-target')).offset().top - 200},600);
                }
            })
        },
        pageSmallMenu: function () {
            var windowsWidth = $(window).width();
            var menuOngletsWidth = $('.main_menu').width();
            var activeItemIndex= $('.main_menu > li > a.active').parent('li').index()

            if ($('.main_menu > li').length%2 > 0) {
                $('.main_menu').append('<li></li>')
            }

            if ( windowsWidth < menuOngletsWidth ) {
                $('.main_menu').slick({
                  infinite: false,
                  speed: 300,
                  slidesToShow: 1,
                  variableWidth: true,
                  slidesToScroll: 2,
                  mobileFirst : false,
                  initialSlide : activeItemIndex
                });

                
                $('.main_menu').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                  console.log('currentSlide : ',currentSlide);
                  console.log('slideCount : ',slick.slideCount);
                    if (slick.slideCount - nextSlide == 2) {
                        $('.main_menu .slick-next').addClass('lastClick');
                    }else{
                        $('.main_menu .slick-next').removeClass('lastClick');
                    }
                });
            }/*else{
                $('.main_menu').slick('unslick');
            }*/
        },
        accordiontable: function () {

            $('.accordion').on('click', function(){
                $(this).toggleClass("active");
                $(this).next().toggleClass("show");
            })

        },
        remplirformulaire: function () {
            bp.dom.remplirformulaire.on('click', function() {
                if ($('.form_rempli').is(':checked')) {
                    $('.espace_formulaire_info').css('display', 'block');
                    /*$('.form_rempli').parent().parent().parent('.code_block').css('display', 'none');*/
                    $('.telecharger_form').css('display', 'none');

                } else {
                    $('.espace_formulaire_info').css('display', 'none');
                    $('.telecharger_form').css('display', 'block');
                }
            })

        },
        remplir_formulaire: function () {
            bp.dom.remplir_formulaire.on('click', function() {
                $(".bloc_formulaire_transfert").toggle();
                $(".telecharger_form").toggleClass('showColumns');
            })

        },
        choix_compte_bp: function () {
            bp.dom.choix_compte_bp.on('click', function() {
                if ($('.afficher_compte_bp').is(':checked')) {
                    $('.compte_choices').hide();
                    $('.compte2').show();
                } else {
                    $('.compte_choices').hide();
                    $('.compte1').show();
                }
            })

        },
        afficher_libelle: function () {
            bp.dom.afficher_libelle.on('click', function() {
                if ($('.afficher_libelle_recharge').is(':checked')) {
                    /*$('.favori_Secondbloc').show();*/
                    $('.favori_Secondbloc').show();
                } else {
                    /*$('.favori_Secondbloc').hide();*/
                    $('.favori_Secondbloc').hide();
                }
            })

        },
        afficher_libelle_1: function () {
            bp.dom.afficher_libelle.on('click', function() {
                if ($('.afficher_libelle_recharge_1').is(':checked')) {
                    $('.favori_Secondbloc_1').show();
                } else {
                    /*$('.favori_Secondbloc').hide();*/
                    $('.favori_Secondbloc_1').hide();
                }
            })

        },
        editFavList: function () {
            bp.dom.editFavListBtn.on('click', function() {
                $('.admin_fav_list').toggleClass('edit_mode');
                return false;
            })
            bp.dom.closeEditionBtn.on('click', function() {
                $('.admin_fav_list').toggleClass('edit_mode');
                return false;
            })
            bp.dom.deleteFavLink.on('click', function() {
                $(this).parent('li').remove();
                return false;
            })

        },
        EvolutionChart: function () {
            // Account Evolution's Chart
            if ($('#evolution_chart').length) {

                // var ycategories = ['0', '2.5k', '5k', '7.5k', '10k', '12.5k', '15k'];
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
                        tickInterval:  7 * 24 * 3600 * 1000,
                        endOnTick: false,
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
                            // [Date.parse('11/02/2015'), 500],
                            [Date.parse('11/09/2015'), 900],
                            [Date.parse('11/16/2015'), 100],
                            [Date.parse('11/23/2015'), 100],
                            [Date.parse('11/30/2015'), 600],

                            [Date.parse('12/07/2015'),1700],
                            [Date.parse('12/14/2015'), 2500],
                            [Date.parse('12/21/2015'), 1300],
                            [Date.parse('12/28/2015'), 1000],

                            [Date.parse('01/04/2016'), 2000],
                            [Date.parse('01/11/2016'),1900],
                            [Date.parse('01/18/2016'), 1500],
                            [Date.parse('01/25/2016'), 2000]
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
        MultiEvolutionChart: function () {
            // Multi Accounts Evolution's Chart'#'+chartid'#'+chartid
            if ($('#evolution_chart_multi').length) {
                Highcharts.setOptions({
                    lang: {
                        shortMonths: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'DÃ©c'],
                        weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                        months: ['Janvier', 'FÃ©vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                        noData: 'Pas dâ€™information Ã  afficher',
                        loading: 'Chargement en coursâ€¦,',
                        resetZoom:'RÃ©initialiser le zoom',
                    }
                });
                var positiontick_y=tick_y(12100000);
                // var ycategories = ['0', '2.5k', '5k', '7.5k', '10k', '12.5k', '15k'];
                    var chart = $('#evolution_chart_multi').highcharts({
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
                        // pointStart: Date.UTC(1999, 0, 1),
                        tickInterval:  14* 24 * 3600 * 1000,
                        endOnTick: false,
                        showFirstLabel: false,
                        startOnTick: true,
                        showLastLabel: true,
                        // tickmarkPlacement: 'on',
                        // categories: ['Dec', 'Jan', 'Fev'],
                        labels: {
                            align: 'center',
                            // x: -19,
                            y: 6,
                            useHTML: true,
                            formatter: function() {
                                return '<span class="hc-label">' +Highcharts.dateFormat('%e %b', this.value)+ '</span>';
                            }
                        },
                        crosshair: {
                            color: '#D8D8D8',
                            dashStyle: "Solid",
                            snap: true,
                            width: 1,
                            zIndex: 2
                        },
                        tickLength: 1,
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
                        tickInterval: positiontick_y,
                        tickmarkPlacement: 'on',
                        // categories: ycategories,
                        title: {
                            text: ''
                        },
                        labels: {
                            formatter: function () {
                                if (this.value >= 1000 || this.value <= -1000) {
                                    this.value = (this.value / 1000)
                                    return (this.value) + 'K';
                                }else{
                                    return this.value;
                                }

                            }
                        },
                        tickLength: 1,
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
                        color: '#ea932c',
                        allowPointSelect: true,
                        marker: {
                            fillColor: '#fff',
                            lineWidth: 2,
                            radius: 6,
                            lineColor: '#ea932c',
                            states: {
                                select: {
                                    fillColor: '#ea932c',
                                    lineColor: '#ea932c',
                                    radius: 8,
                                    lineWidth: 2
                                }
                            }
                        },
                        data: [    
                            [Date.UTC(2016, 6, 23), 10000],
                            [Date.UTC(2016, 6, 30), 40000],
                            [Date.UTC(2016, 7, 2), 170000],
                            [Date.UTC(2016, 7, 8), 6000],
                            [Date.UTC(2016, 7, 20), -100000],
                            [Date.UTC(2016, 7, 27),8000],
                            [Date.UTC(2016, 7, 30), 12000000],
                            [Date.UTC(2016, 8, 6), 1800],
                            [Date.UTC(2016, 8, 9), 90000],
                            [Date.UTC(2016, 8, 19), 99900],
                            [Date.UTC(2016, 9, 1), 190000],
                            [Date.UTC(2016, 9, 9), 200000],
                            [Date.UTC(2016, 9, 14), 10000]
                        ],
                        type: 'line',
                        lineWidth: 2,
                        stickyTracking: true
                    
                    },
                    {
                        cursor: 'pointer',
                        color: '#6357ac',
                        allowPointSelect: true,
                        marker: {
                            fillColor: '#fff',
                            lineWidth: 2,
                            radius: 6,
                            lineColor: '#6357ac',
                            states: {
                                select: {
                                    fillColor: '#6357ac',
                                    lineColor: '#6357ac',
                                    radius: 8,
                                    lineWidth: 2
                                }
                            }
                        },
                        data: [    
                            [Date.UTC(2016, 6, 23), 500000],
                            [Date.UTC(2016, 6, 30), 3000000],
                            [Date.UTC(2016, 7, 2), 1000000],
                            [Date.UTC(2016, 7, 8), 600000],
                            [Date.UTC(2016, 7, 20), -100000],
                            [Date.UTC(2016, 7, 27),800000],
                            [Date.UTC(2016, 7, 30), 9000000],
                            [Date.UTC(2016, 8, 6), 180000],
                            [Date.UTC(2016, 8, 9), 900000],
                            [Date.UTC(2016, 8, 19), 9099000],
                            [Date.UTC(2016, 9, 1), 1900000],
                            [Date.UTC(2016, 9, 9), 200000],
                            [Date.UTC(2016, 9, 14), 1000000]
                        ],
                        type: 'line',
                        lineWidth: 2,
                        stickyTracking: true
                    
                    }
                    ]
                });
            };


            $('#evolutions_sales').on('change', function(evt, params) {
                console.warn($(this).val());
                console.log('Today' , moment().format("MM DD YYYY"))
                console.log('date of ' + $(this).val() +' days ago' , moment().subtract($(this).val(), 'days').format("MM DD YYYY"))

                var currentDate = moment().format("DD/MM/YYYY");
                var oldDate = moment().subtract($(this).val(), 'days').format("DD/MM/YYYY");
                console.log("oldDate ",moment(oldDate,"DD/MM/YYYY").date());
                //console.log(parseInt(currentDate.getFullYear()))
                //EvolutionChart2(data4, currentDate, oldDate, 12100000);
                var bigdata=[];

                bigdata.push(data2);
                bigdata.push(data3);
                bigdata.push(data4);
                bigdata.push(data5);
                console.log("bigdata",bigdata)
    	        var chart = $('#evolution_chart_multi').highcharts(); // instance highchart
    	       //   var series = chart.series; // call series
                 // console.log("before each==>", series[0].data)
                var x=0;
                var result=[];
                $.each(bigdata,function(i,value){
                    var test=[];
                    $.each(value,function(y,data_val){
                        //console.log("array["+i+"]["+y+"]="+data_val);
                        db_date=Date.UTC(moment(oldDate,"DD/MM/YYYY").year(), moment(oldDate,"DD/MM/YYYY").month(), moment(oldDate,"DD/MM/YYYY").date());
                        fn_date=Date.UTC(moment(currentDate,"DD/MM/YYYY").year(), moment(currentDate,"DD/MM/YYYY").month(), moment(currentDate,"DD/MM/YYYY").date());
                        console.log("start_date==>",db_date)
                        console.log("fn_date==>",fn_date)
                        console.log("data_val",data_val[0]);
                        if(data_val[0]>=db_date && fn_date>=data_val[0]){
                                console.log("data_solde", data_val[0].toString());
                                console.log("y=i=",i)
                                console.log("y=",y)
                                test.push(bigdata[i][y])
                        }
                    })
                    result.push(test)
                    console.log('name_'+ Math.floor((Math.random() * 10) + 1))
                    //chart.series[i].update({name:'new title'});
                    //chart.series[i].addPoint({name: "New Point", y: Math.floor(10 + Math.random() * 30)});

                    //chart.series[i].update({name:'name_'+ Math.floor((Math.random() * 10) + 1)});
                    chart.series[i].setData(test);
                    //chart.redraw();

                })

                
            });


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
                bp.dom.popinContainer.hide();
                $('#' + $(this).attr('data-target')).show(300);
                bp.dom.popinBackdrop.show();
            })
            bp.dom.popinClose.on('click', function(){
                bp.dom.popinContainer.hide(300);
                bp.dom.popinBackdrop.hide();
            })
            return false;
        },
        showHideToolsChildMenu: function () {
            bp.dom.toolsHasChild.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                }else{
                    bp.dom.toolsHasChild.removeClass('active')
                    $(this).addClass('active')
                }
                return false;
            });

        },
        showHideToolsMenuAction: function () {
            bp.dom.toolsMenuAction.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                }else{
                    bp.dom.toolsMenuAction.removeClass('active')
                    $(this).addClass('active')
                }
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
                    $('.purple_profil_info_global, .yellow_menu_content, .dashbord_infos').show();
                    $('.content_container').removeClass('searchbar_active');
                }else{
                    $(this).addClass('active');
                    bp.dom.searchShowBtn.addClass('active');
                    bp.dom.searchBarArea.fadeIn(100);
                    $('.purple_profil_info_global, .yellow_menu_content, .dashbord_infos').hide();
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
            bp.dom.floatedLinks.find('li').on('mouseover', function(){
                console.log($(this));
                $(this).parent('ul').stop().animate({'right': '0'}, 200).removeClass('cached')
            })
            .on('mouseleave', function(){
                console.log($(this));
                $(this).parent('ul').stop().animate({'right': '-228px'}, 200).addClass('cached')
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
        filterType : function() {
            if (bp.vars.isMobile) {
                $('.general_filter_type').on('change', function(){
                    if ($(this).val() == 'all') {
                        $('.filter_type_section li').show(300);
                    }else{
                        $('.filter_type_section li').not('li[data-type=' + $(this).val() + ']').hide(300);
                        $('.filter_type_section li[data-type=' + $(this).val() + ']').show(300)
                    }
                })
            }else{
                bp.dom.FilterListeType.chosen({
                    width: "180px",
                    placeholder_text_multiple : "",
                    display_selected_options : false

                })
                    .change(function(e, params){
                        // params.selected and params.deselected will now contain the values of the
                        // or deselected elements.
                        if (params.selected == 'all') {
                            $('.filter_type_section li').show(300);

                        }else{
                            $('.filter_type_section li').not('li[data-type=' + params.selected + ']').hide(300);
                            $('.filter_type_section li[data-type=' + params.selected + ']').show(300)

                        }
                        console.info(params.selected)

                    });
            }
        },
        simulatorsActions : function(){
            if ($('#priceSimulator').length) {
                $("#priceSimulator").slider()
                .on("slide", function(slideEvt) {
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);
                }).on("slideStop", function(slideEvt) {
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);
                });
                $("#priceSimulator").on('change', function(){
                    var val = parseFloat($(this).val().replace(/ /g,''))
                    bp.simulateCridet(val);
                })

                $('#crlt1').bind('DOMAttrModified textInput input change keypress paste focus', function () {
                    console.log(this.value);
                    var val = parseFloat($(this).val().replace(/ /g,''));
                    $("#" + $(this).attr('data-target')).slider('setValue', val);
                     bp.simulateCridet(val);
                });
                $('#mensualite').bind('DOMAttrModified textInput input change paste', function () {
                    console.log("this.value",this.value);
                    var val = parseFloat($(this).val().replace(/ /g,'').replace('.',','));
                    $("#" + $(this).attr('data-target')).slider('setValue', val);
                    if(val) $("#mensualite").val(addSpace(val))            
                });
            };
            if ($('#rateSimulator').length) {
                $("#rateSimulator").slider().on("slide", function(slideEvt) {
                    if (slideEvt.value < 10) {
                        slideEvt.value = "0" + slideEvt.value
                    }
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulateCridet(slideEvt.value);
                    var ratesVal  = $('#crlt2').val().replace('.',',');
                    console.log("rating slider")
                    $('#crlt2').val(addSpace(ratesVal));
                }).on("slideStop", function(slideEvt) {
                    if (slideEvt.value < 10) {
                        slideEvt.value = "0" + slideEvt.value
                    }
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulateCridet(slideEvt.value);
                    var ratesVal = $('#crlt2').val().replace('.',',');
                    $('#crlt2').val(addSpace(ratesVal));
                });

                $('#crlt2').on('keyup keypress', function(){
                    var val = parseFloat($(this).val().replace(/ /g,'').replace(/,/g,'.'));
                    if ($(this).val().indexOf(',') > 0) {
                        var numberFloat = ($(this).val().split(','));
                    }
                    if (val > 15) {
                        $(this).val(15);
                        $("#" + $(this).attr('data-target')).slider('setValue', val);
                        bp.simulateCridet(val);
                        return false;
                    }else{
                        $("#" + $(this).attr('data-target')).slider('setValue', val);
                        bp.simulateCridet(val);
                    }
                    
                })
                $('#crlt2').on('keypress', function(){
                 
                    return (event.charCode >= 48 && event.charCode <= 57)||( event.charCode == 44 )
                })
            };
            if ($('#durationSimulator').length) {
                $("#durationSimulator").slider().on("slide", function(slideEvt) {
                    // console.log($(".simulator_controll[data-target=" + $(this).attr('id') + "]"))
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulateCridet(slideEvt.value);
                }).on("slideStop", function(slideEvt) {
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulateCridet(slideEvt.value);
                });

                $('#crlt3').on('keyup', function(){
                    var val = parseFloat($(this).val().replace(/ /g,''))
                    $("#" + $(this).attr('data-target')).slider('setValue', val);
                    bp.simulateCridet(val);
                })
            };
            if ($('#monthlySimulator').length) {
                $("#monthlySimulator").slider().on("slide", function(slideEvt) {
                    // console.log($(".simulator_controll[data-target=" + $(this).attr('id') + "]"))
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulatePrice(slideEvt.value);
                    var ratesVal = $('#mensualite').val().replace('.',',');
                    $('#mensualite').val(addSpace(ratesVal));
                }).on("slideStop", function(slideEvt) {
                    $(".simulator_controll[data-target=" + $(this).attr('id') + "]").val(slideEvt.value);

                    bp.simulatePrice(slideEvt.value);
                    var ratesVal = $('#mensualite').val().replace('.',',');
                    $('#mensualite').val(addSpace(ratesVal));
                });

                $('#mensualite').on('keyup', function(){
                    var val = parseFloat($(this).val().replace(/ /g,''))
                    $("#" + $(this).attr('data-target')).slider('setValue', val);
                    bp.simulatePrice(val);
                })

            };
        },
        formatPrice : function() {
            var value = '1234567';
            value = value.match(/.{1,3}/g).join(" ");

             console.log('value',value)
            
        },
        maskFormat : function() {
            $('.testFormat').inputmask('999 999 999', {
                numericInput: true,
                placeholder: ' ',
                clearMaskOnLostFocus: false
            });
            $('.accountFormat').inputmask('9999 9999 9999 9999', {
                alias: 'decimal',
                clearMaskOnLostFocus: true,
                autoGroup: true,
                insertMode: true
            });
            $('.ratesFormat').inputmask('99,99', {
                alias: 'decimal',
                placeholder: '0',
                clearMaskOnLostFocus: false,
                autoGroup: true,
                insertMode: true
            });
            $('.accountFormat1').inputmask('9999 9999 9999 9999 9999 9999', {
                alias: 'decimal',
                clearMaskOnLostFocus: true,
                autoGroup: true,
                insertMode: true
            });
        },
        simulateCridet : function(slideVal) {
            var montant = parseFloat($('#priceSimulator').val().replace(/ /g,''));

            // var taux1 = parseFloat($('#rateSimulator').val().replace(/ /g,''))

            var taux= (parseFloat($('#rateSimulator').val().replace(/ /g,'').replace(/,/g,'.')) / 100) + 1;
             // console.log('taux :', parseFloat($('#rateSimulator').val().replace(/ /g,'').replace(/,/g,'.')) / 100)

            // var duree1 = parseFloat($('#durationSimulator').val().replace(/ /g,''))

            var duree = parseFloat($('#durationSimulator').val().replace(/ /g,''));
            
            // console.log('montant :', montant)
            // console.log('taux1 :', taux1)
            // console.log('taux :', taux)
            // console.log('duree :', duree)
            // var tauxP = taux1/12;
            // var tauxAdd = tauxP + 1;
            // console.log('tauxAdd :', tauxAdd)

            // var x = 1- Math.pow(tauxAdd, -duree);
            
            // var y = montant*tauxP;
            // var res = y/x;
            // console.log('res :', res)



            // console.log('duree :', duree1)
            if (duree != 0) {

                var simulateEquation = (montant * taux) / (duree);

                // console.log('addSpace(MENSUALITE) : ' + addSpace(parseFloat(simulateEquation.toFixed(2))));

                montant = (simulateEquation * duree) / taux

                $('#mensualite').val(addSpace(parseFloat(simulateEquation.toFixed(2))).replace('.',','))
                $("#monthlySimulator").slider('setValue', parseFloat(simulateEquation.toFixed(2)))
            }else{
                $('#mensualite').val(0);
                $("#monthlySimulator").slider('setValue', 0)
            }

        },
        simulatePrice : function(slideVal) {
            var mensualite = parseFloat($('#mensualite').val().replace(/ /g,''));

            // var taux1 = parseFloat($('#rateSimulator').val().replace(/ /g,''))

            var taux= (parseFloat($('#rateSimulator').val().replace(/ /g,'').replace(/,/g,'.')) / 100) + 1;
             // console.log('taux :', parseFloat($('#rateSimulator').val().replace(/ /g,'').replace(/,/g,'.')) / 100)

            // var duree1 = parseFloat($('#durationSimulator').val().replace(/ /g,''))

            var duree = parseFloat($('#durationSimulator').val().replace(/ /g,''));
            
            console.log('duree :', duree)

            if (duree != 0) {

                // var simulateEquation = (montant * taux) / (duree);

                // console.log('addSpace(MENSUALITE) : ' + addSpace(parseFloat(simulateEquation.toFixed(2))));

                var montant = (mensualite * duree) / taux;

            console.log('montant :', montant)

                $('#crlt1').val(parseFloat(montant.toFixed(2).replace('.',',')))
                $("#priceSimulator").slider('setValue', parseFloat(montant.toFixed(2)))
            }else{
                $('#crlt1').val(0);
                $("#priceSimulator").slider('setValue', 0)
            }

        },
        contentScroller : function() {
            if (bp.dom.contentContainer.length) {
                var containerOffsetTop = bp.dom.contentContainer.offset().top;
                var windowHeight = $(window).height()
                var containerHeight = windowHeight - containerOffsetTop;
                bp.dom.contentContainer.css('height',containerHeight -20)
            };
        },
        carnetControls : function() {
            //moins plus carnetValeur
           bp.dom.moins.on('click', function(e){
                console.log('moins')
                if(bp.dom.carnetValeur.val()!=1){
                    bp.dom.carnetValeur.val(bp.dom.carnetValeur.val() - 1);
                }
            })
           bp.dom.plus.on('click', function(e){
                console.log('plus')
                    bp.dom.carnetValeur.val(parseInt(bp.dom.carnetValeur.val()) + 1);

            })
        },
        search_btn_click:function(){
            $(".zebra_table_search").on('click',function(){            
                $('.th_dropdown').removeClass('active');
                $('.th_lbl').parent('.th_dropdown').find('.dropDown_Action').slideUp();
            })
        },
        dropDown_Actions : function() {
           $('.th_lbl').on('click',function(){
                    if( $(this).parent('.th_dropdown').hasClass('active')){
                        console.log('here')
                        $('.th_dropdown').removeClass('active');
                        $('.th_lbl').parent('.th_dropdown').find('.dropDown_Action').slideUp();
                    }
                    else{
                         console.log('there')
                        $('.th_lbl').not( $(this) ).parent('.th_dropdown').find('.dropDown_Action').slideUp();
                        $(this).parent('.th_dropdown').find('.dropDown_Action').slideDown(100);
                        $(this).parent('.th_dropdown').find('.dropDown_Action').find('.zebra_table_desc').focus();
                        $('.th_dropdown').removeClass('active');
                        $(this).parent('.th_dropdown').addClass('active');
                    }
                })
                $('.th_lbl').on('click',function(){
                    if( $(this).parent('.th_dropdown_operation').hasClass('active')){
                        $('.th_dropdown_operation').removeClass('active');
                    }
                    else{
                        $('.th_dropdown_operation').removeClass('active');
                        $(this).parent('.th_dropdown_operation').addClass('active');
                    }
                })
               $(".drop-down-list li a").click(function(event) {
                    // check if window is small enough so dropdown is created
                     $(".dropDown_Action").slideUp("fast");
                    $('.th_dropdown_operation').removeClass('active');
                });
               $('.zebra_table_search').on('click',function(event){
                console.log("button.zebra_table_search")
                    var $trigger = $(".th_dropdown");
                    if($trigger !== event.target && !$trigger.has(event.target).length){
                        $(".dropDown_Action").slideUp("fast");
                        $('.th_dropdown').removeClass('active');
                    }
                });
               $('html').on('click',function(event){
                    var $trigger = $(".th_dropdown");
                    if($trigger !== event.target && !$trigger.has(event.target).length){
                        $(".dropDown_Action").slideUp("fast");
                        $('.th_dropdown').removeClass('active');
                    }
                    if($trigger.hasClass("th_filter_active")){
                        console.log("truuuue")
                    }

                   bp.dom.toolsHasChild.removeClass('active');
                   $('.select_compteItem').removeClass('active');
                    console.log("feermer")
                });
                $('.form-search').on('submit',function(event){
                    return false;
                }); 
                
        },
        dataTableFunctions : function() {
                console.warn(bp.vars.messages.fr.infoEmpty)
                // Define function call for custom search
                var t = $('#myTable').DataTable({
                    "bPaginate": false,
                    "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                        { 'bSortable': true, 'aTargets': [5] },
                        ],
                    bInfo: false,
                     "language": {
                        "lengthMenu": "Display -- records per page",
                        "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                        "infoEmpty": "Aucune opération n'est enregistrée"
                    }
                });
                var o = $('#myOperation').DataTable({
                            "bPaginate": false,
                        "aaSorting": [],  
                            "aoColumnDefs": [
                        { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                        { 'bSortable': true, 'aTargets': [1] },
                        { 'bSortable': true, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] }, // Montant
                        { 'bSortable': true, 'aTargets': [4] }, // Solde
                       ],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });
                 
                var histoCarte = $('#historiqueCarte').DataTable({
                    "bPaginate": false,
                    "aaSorting": [],    
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'className': 'date_th', 'bSortable': true, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] }, ],
                    bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });
                var emprunts = $('#mesEmprunts').DataTable({
                    "bPaginate": false,
                "aaSorting": [],    
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': true, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] }, ],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });

                var Synthese_myCartes = $('#Synthese_myCartes').DataTable({
                    "bPaginate": false,
                "aaSorting": [],  
                    "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                    ],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });


                var operationAVenir = $('#operationAVenir').DataTable({
                    "bPaginate": false,
                "aaSorting": [],    
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                        { 'bSortable': true, 'aTargets': [5] },],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });

                var historiqueDetailCarte = $('#historiqueDetailCarte').DataTable({
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'className': 'date_th', 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                        { 'bSortable': true, 'aTargets': [5] },],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });

                var Synthese_OPV = $('#Synthese_OPV').DataTable({
                    "bPaginate": false,
                "aaSorting": [],    
                    "aoColumnDefs": [
                        { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': true, 'aTargets': [4] },
                        { 'bSortable': true, 'aTargets': [5] },
                        ],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });
 
                var historiqueCode = $('#historiqueCode').DataTable({
                    "bPaginate": false,
                "aaSorting": [],    
                    "aoColumnDefs": [
                        { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] } ],
                            bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            }
                        });

                var historiqueCommande = $('#historiqueCommande').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': true, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
                var detailEmprunt = $('#detailEmprunt').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] },
                        { 'bSortable': false, 'aTargets': [6] },
                        { 'bSortable': false, 'aTargets': [7] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
                var simulatorTable = $('#simulatorTable').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] },
                        { 'bSortable': false, 'aTargets': [6] },
                        { 'bSortable': false, 'aTargets': [7] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
                var ListeImpaye = $('#ListeImpaye').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'className': 'date_th', 'bSortable': true, 'aTargets': [2] },
                        { 'bSortable': true, 'aTargets': [3] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
            var historiqueMesPaiment = $('#historiqueMesPaiment').DataTable( {
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': false, 'aTargets': [5] },
                    { 'bSortable': false, 'aTargets': [6] },
                     { 'bSortable': true, 'aTargets': [7] }],
                "bLengthChange": false,
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            } );
           

            var transfertHistoriquePaiement = $('#transfertHistoriquePaiement').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': false, 'aTargets': [5] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            /*var historiqueTransfertMaroc = $('#historiqueTransfertMaroc').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': true, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': true, 'aTargets': [4] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });*/

            var transfertHistoriquePaiement_ = $('#transfertHistoriquePaiement_').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': true, 'aTargets': [5] },
                    { 'bSortable': false, 'aTargets': [6] },
                    { 'bSortable': false, 'aTargets': [7] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });

            var mes_compte_contrat = $('#mes_compte_contrat').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': true, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var mes_compte_contrat_historique = $('#mes_compte_contrat_historique').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': true, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var mes_service_active = $('#mes_service_active').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': true, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var autres_service_disponible = $('#autres_service_disponible').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });

            var list_beneficiaire = $('#list_beneficiaire').DataTable({
                "bPaginate": false,
                "aaSorting": false,
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': false, 'aTargets': [5] }
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });

            /*var favorisPaiment = $('#favorisPaiment').DataTable( {
                "bPaginate": false,
                "aoColumnDefs": [
                    { 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': true, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] }],
                "bLengthChange": false,
                bInfo: false,
                "language": {
                    "lengthMenu": "Display -- records per page",
                    "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                    "infoEmpty": "Aucune opération n'est enregistrée"
                }
            } );*/
            var PaimentChoixRadio = $('#PaimentChoixRadio').DataTable( {
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                     { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'orderable': false, 'className': 'radio-checkbox', 'targets':   5} ],
                // "columnDefs": [ 
                //     {
                //     'orderable': false,
                //     'className': 'radio-checkbox',
                //     'targets':   4
                // } ],
                "select": {
                    'style':    'os',
                    'selector': 'td.radio-checkbox'
                }, 
                "bLengthChange": false,
                bInfo: false,
                "language": {
                    "lengthMenu": "Display -- records per page",
                    "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                    "infoEmpty": "Aucune opération n'est enregistrée"
                }
            } );
            var PaimentChoixChekbox = $('#PaimentChoixChekbox').DataTable( {
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'orderable': false, 'className': 'select-checkbox', 'targets':   5} ],
                 
                "bLengthChange": false,
                bInfo: false,
                "language": {
                    "lengthMenu": "Display -- records per page",
                    "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                    "infoEmpty": "Aucune opération n'est enregistrée"
                }
            } );
            var t = $('#favorisPaiment').DataTable({
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var tfavorisTransfert= $('#favorisTransfert').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var historiqueVirementTable = $('#historiqueVirement').DataTable({
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': true, 'aTargets': [5] },
                    { 'bSortable': false, 'aTargets': [6] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var misedisposition = $('#misedisposition').DataTable({
                "bPaginate": false,
                "aaSorting": [],
                "aoColumnDefs": [
                    { 'bSortable': true, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': false, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': false, 'aTargets': [4] },
                    { 'bSortable': true, 'aTargets': [5] },
                    { 'bSortable': false, 'aTargets': [6] },
                    { 'bSortable': false, 'aTargets': [7] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });
            var historiqueTransfertMaroc = $('#historiqueTransfertMaroc').DataTable({
                "bPaginate": false,
                "aaSorting": [],  
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [0] },
                    { 'bSortable': false, 'aTargets': [1] },
                    { 'bSortable': true, 'aTargets': [2] },
                    { 'bSortable': false, 'aTargets': [3] },
                    { 'bSortable': true, 'aTargets': [4] },
                    { 'bSortable': false, 'aTargets': [5] },
                    { 'bSortable': false, 'aTargets': [6] },
                ],
                bInfo: false,
                "language": {
                    "lengthMenu": bp.vars.messages.fr.lengthMenu,
                    "zeroRecords": bp.vars.messages.fr.zeroRecords,
                    "infoEmpty": bp.vars.messages.fr.infoEmpty
                }
            });

            
                 
            $('#detail').DataTable( {
                "bPaginate": false,
                "aoColumnDefs": [
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [1] },
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [3] },
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [4] },
                    { 'className': 'date_th', 'bSortable': true, 'aTargets': [5] }
                ],
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": false,
                "order": [[ 3, "desc" ]],
                "columnDefs": [
                    { "type": "date-dd-mmm-yyyy", targets: 1 }
                ]
            } );
            $('#detail1').DataTable( {
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": false,
                "order": [[ 3, "desc" ]],
                "columnDefs": [
                    { "type": "date-dd-mmm-yyyy", targets: 1 }
                ]
            } );
 

            var contrat_dassistance = $('#contrat_dassistance').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );

            var mes_remboursements = $('#mes_remboursements').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': true, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] },
                        { 'bSortable': false, 'aTargets': [6] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );

            var banc_dassistanceDetail = $('#banc_dassistanceDetail').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': true, 'aTargets': [1] },
                        { 'bSortable': true, 'aTargets': [2] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
            var carnet_dordre = $('#carnet_dordre').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': true, 'aTargets': [5] },
                        { 'bSortable': true, 'aTargets': [6] },
                        { 'bSortable': false, 'aTargets': [7] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );

            var banc_dassistance = $('#banc_dassistance').DataTable( {
                    "bPaginate": false,
                "aaSorting": [],  
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                        { 'bSortable': false, 'aTargets': [5] },
                        { 'bSortable': false, 'aTargets': [6] }],
                    "bLengthChange": false, 
                     bInfo: false,
                             "language": {
                                "lengthMenu": "Display -- records per page",
                                "zeroRecords": "Aucun résultat ne correspond à  vos critères de recherche",
                                "infoEmpty": "Aucune opération n'est enregistrée"
                            } 
                } );
            /************* lot 3 table agence*****************/
                var table_agence = $('#table_agence').DataTable({
                    "bPaginate": false,
                    "aaSorting": [],
                    "aoColumnDefs": [
                        { 'bSortable': false, 'aTargets': [0] },
                        { 'bSortable': false, 'aTargets': [1] },
                        { 'bSortable': false, 'aTargets': [2] },
                        { 'bSortable': false, 'aTargets': [3] },
                        { 'bSortable': false, 'aTargets': [4] },
                    ],
                    bInfo: false,
                    "language": {
                        "lengthMenu": bp.vars.messages.fr.lengthMenu,
                        "zeroRecords": bp.vars.messages.fr.zeroRecords,
                        "infoEmpty": bp.vars.messages.fr.infoEmpty
                    }
                });
             

        },
        compteDates : function() {
                var myVariable = new Date();
                var makeDate = new Date(myVariable);
                makeDate = new Date(new Date().setMonth(makeDate.getMonth() - 3));
                pick1_maxDate = new Date(new Date().setMonth(makeDate.getMonth() + 2));
                pick2_minDate = new Date(new Date().setMonth(makeDate.getMonth() + 1));
                //console.log('makeDate',makeDate)
                $( "#datepicker1" ).datepicker({
                    minDate : makeDate,
                    maxDate: pick1_maxDate,
                    inline: true,
                    changeMonth: true,                    
                    dateFormat: "dd/mm/yy",
                    onSelect: function (date) {
                        var date2 = $('#datepicker1').datepicker('getDate');
                        var start_date=$('#datepicker1').datepicker('getDate');
                        var fin_date=$('#datepicker2').datepicker('getDate');                        
                        var diffdate=diff("datepicker1", "datepicker2")/1000/60/60/24;
                        start_date.setDate(start_date.getDate()); 
                       date2.setDate(date2.getDate()+30);                                        
                        //$('#datepicker2').datepicker('setDate', date2);
                        //sets minDate to dt1 date + 1
                        $('#datepicker2').datepicker('option', 'minDate', date2);
                        console.log("changing data value.......")
                        var result = [];
                        for (var k in data2){
                                if (data2.hasOwnProperty(k)) {
                                     console.log("Key is " + k + ", value is" + data2[k]);
                                     date_solde=data2[k].toString().split(",");
                                     db_date=Date.UTC(start_date.getFullYear(),start_date.getMonth(),start_date.getDate());
                                     fn_date=Date.UTC(fin_date.getFullYear(),fin_date.getMonth(),fin_date.getDate());
                                    //console.log("start_date==>",start_date)
                                     if(date_solde[0]>=db_date && fn_date>=date_solde[0]){
                                        console.log("data_solde", date_solde[0].toString());
                                        result.push(data2[k])
                                     }



                                }
                            }
                      

                        EvolutionChart2('evolution_chart',result, $("#datepicker1").val(), $("#datepicker2").val(),12100000);
                    }
                });
                $( "#datepicker2" ).datepicker({                    
                    maxDate: 0,
                    inline: true,
                    changeMonth: true,                    
                    dateFormat: "dd/mm/yy",
                    minDate:pick2_minDate,
                    onSelect: function (date) {
                        console.log("datepickkkkker")
                        var date1 = $('#datepicker2').datepicker('getDate');
                        var end_date=$('#datepicker2').datepicker('getDate');
                        var debut_date=$('#datepicker1').datepicker('getDate');
                        var diffdate=diff("datepicker1", "datepicker2")/1000/60/60/24;
                        end_date.setDate(end_date.getDate());
                        
                            date1.setDate(date1.getDate()-30); 
                       
                        //$('#datepicker1').datepicker('setDate', date1);
                        //sets minDate to dt1 date + 1
                        //if(date1.getDate()>pick1_maxDate.getDate())
                        $('#datepicker1').datepicker('option', 'maxDate', date1);
                        console.log("changing data value.......")
                        var result = [];
                        for (var k in data2){
                                if (data2.hasOwnProperty(k)) {
                                     //console.log("Key is " + k + ", value is" + data2[k]);
                                     date_solde=data2[k].toString().split(",");
                                    fn_date=Date.UTC(end_date.getFullYear(),end_date.getMonth(),end_date.getDate());
                                    db_date=Date.UTC(debut_date.getFullYear(),debut_date.getMonth(),debut_date.getDate());
                                    console.log("End date vs date_solde[0]", end_date +'vs'+ date_solde[0])
                                     if(date_solde[0]<=fn_date && date_solde[0]>=db_date){
                                        // console.log("data_solde", date_solde[0].toString());
                                        result.push(data2[k])
                                     }
                                }
                            }
                            console.log("result", result)
                        EvolutionChart2('evolution_chart',result, $("#datepicker1").val(), $("#datepicker2").val(),12100000);
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
                $('#datepicker1').datepicker('setDate',makeDate,$.datepicker.regional["fr"]);
                $('#datepicker2').datepicker('setDate', new Date(),$.datepicker.regional["fr"]);
                $('#datepicker_validate').datepicker('setDate', new Date(),$.datepicker.regional["fr"]);

                //var date = $('#datepicker').datepicker({ dateFormat: 'dd.mm.yy' }).val();

        },
        edocDates : function() {
            var myVariable = new Date();
            var makeDate = new Date(myVariable);
            makeDate = new Date(new Date().setMonth(makeDate.getMonth() - 120));
            var initDate= new Date(myVariable);
            initDate = new Date(new Date().setMonth(makeDate.getMonth() - 1));
            console.log('makeDate',makeDate)
            $( "#edocStartDate" ).datepicker({
                minDate : makeDate,
                maxDate: 0,
                changeMonth: true,
                changeYear:true,
                inline: true,
                dateFormat: "dd.mm.yy",
                onSelect: function (date) {
                    var date2 = $('#edocStartDate').datepicker('getDate');
                    date2.setDate(date2.getDate());
                    $('#edocEndDate').datepicker('option', 'minDate', date2);
                }
            });

            $( "#edocEndDate" ).datepicker({
                minDate : makeDate,
                maxDate: 0,
                changeMonth: true,
                changeYear:true,
                inline: true,
                dateFormat: "dd.mm.yy",
                onSelect: function (date) {
                    var date1 = $('#edocEndDate').datepicker('getDate');
                    date1.setDate(date1.getDate());
                    //$('#edocStartDate').datepicker('setDate', date1);
                    //sets minDate to dt1 date + 1
                    $('#edocStartDate').datepicker('option', 'maxDate', date1);
                },
                onClose: function () {
                    var dt1 = $('#edocStartDate').datepicker('getDate');
                    console.log(dt1);
                    var dt2 = $('#edocEndDate').datepicker('getDate');
                    if (dt2 <= dt1) {
                        var minDate = $('#edocEndDate').datepicker('option', 'minDate');
                        $('#edocEndDate').datepicker('setDate', minDate);
                    }
                }
            });
            $('#edocStartDate').datepicker('setDate', initDate,$.datepicker.regional["fr"]);
            $('#edocEndDate').datepicker('setDate', new Date(),$.datepicker.regional["fr"]);
        },
        toolTipster : function(){
            bp.dom.toolTipItems.tooltipster({
                contentAsHTML: true,
                side : 'right',
                maxWidth : '200',
                animation: 'fade',
                delay: 200
            });
        },
        myTutoSlider : function(){
            var tutoSlider = $('.tutoSlider').slick({
                dots: true,
                arrows: false,
                autoplay: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });

            tutoSlider.on('init reInit afterChange', function(event, slick, currentSlide){

                console.log('slider length : ', slick.slideCount)
                console.log('currentSlide : ', currentSlide)

                if((slick.slideCount - currentSlide) == 1){
                    $('.right_tuto_btn').hide(10);
                }else{
                    $('.right_tuto_btn').show(10);
                }

                if((currentSlide) == 0){
                    $('.left_tuto_btn').hide(10);
                }else{
                    $('.left_tuto_btn').show(10);
                }
            })
            



            $('.right_tuto_btn').on('click', function(){
                tutoSlider.slick("slickNext");
            })

            $('.left_tuto_btn').on('click', function(){
                tutoSlider.slick("slickPrev");
            })

            $('.tuto_popin_caller').on('click', function(){
                    tutoSlider.slick("slickGoTo", 0);
            })

        },
        myselectTable : function(){
            $("#PaimentChoixChekbox td.select-checkbox").on('click', function(){
                $(this).parent().toggleClass('selected');
            });
        },    
        myradioTable : function(){
            $('[data-message="message_confirmer"]').on('click', function(){
                $('[data-message="message_confirmer"]').show();
                $('.espace_confirmer_sms').show();
                $('#fragment-4 .step_paiment').show();
                $(".confirmer_sms").css("display","none");
            });
        },
        mymessageConfirmer : function(){
            $("#PaimentChoixRadio td.radio-checkbox").on('click', function(){
                $(this).parent().toggleClass('selected');
            });
        },
        myconfirmerSms : function(){
            $("#PaimentChoixRadio td.radio-checkbox").on('click', function(){
                $(this).parent().toggleClass('selected');
            });
        },
        commandCarteActive : function(){
            $('#commander_btn').on('click', function(){
                console.log('here')
                if ($('input[name=general_terms]').is(":not(:checked)"))  {
                    $('input[name=general_terms]').addClass("has_error");
                    $(".error").show()
                }else{
                    bp.dom.popinContainer.hide();
                    $(".error").hide();
                    $('input[name=general_terms]').removeClass("has_error");
                    $('#' + $(this).attr('data-target')).show(300);
                    bp.dom.popinBackdrop.show();
                }
            })

            $('input[name=general_terms]').on('change', function(){
                if ($('input[name=general_terms]').is(":checked"))  {
                    $('input[name=general_terms]').removeClass("has_error");
                    $(".error").hide()
                }
            })
        },
        connectTabsShow : function(){
            bp.dom.connectTabsShow.on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $('.mobile_connect_tabs').slideUp('fast')
                }else{
                    $(this).addClass('active')
                    $('.mobile_connect_tabs').slideDown('fast')
                }
            });

        },
        accordion : function(){

                $('.accordion_title').on('click', function(){
                    if ($(this).hasClass('active')) {
                        $('.accordion_content').stop().slideUp(300);
                        $('.accordion_title').removeClass('active');
                    }else{
                        $('.accordion_content').stop().slideUp(300);
                        $(this).next('.accordion_content').stop().slideDown(300);
                        $('.accordion_title').removeClass('active');
                        $(this).addClass('active');
                    }
                    return false;
                });
                
                $('.accordion_title_convention').on('click', function(){
                    if ($(this).hasClass('active')) {
                        $('.accordion_content_convention').stop().slideUp(300);
                        $('.accordion_title_convention').removeClass('active');
                    }else{
                        $('.accordion_content_convention').stop().slideUp(300);
                        $(this).next('.accordion_content_convention').stop().slideDown(300);
                        $('.accordion_title_convention').removeClass('active');
                        $(this).addClass('active');
                    }
                    return false;
                });
                $('.bourse_title').on('click', function(){
                    if ($(this).hasClass('active')) {
                        $('.accordion_content').stop().slideUp(300);
                        $('.bourse_title').removeClass('active');
                    }else{
                        $('.accordion_content').stop().slideUp(300);
                        $(this).next('.accordion_content').stop().slideDown(300);
                        $('.bourse_title').removeClass('active');
                        $(this).addClass('active');
                    }
                    return false;
                });
                $('.accordion_title2').on('click', function(){
                    if ($(this).hasClass('active')) {
                        $('.accordion_content2').stop().slideUp(300);
                        $('.accordion_title2').removeClass('active');
                    }else{
                        $('.accordion_content2').stop().slideUp(300);
                        $(this).next('.accordion_content2').stop().slideDown(300);
                        $('.accordion_title2').removeClass('active');
                        $(this).addClass('active');
                    }
                    return false;
                });

                /*Mobile menu accordion*/
                $('.menu_accord_title').on('click', function(){
                    if ($(this).hasClass('active')) {
                        $(this).parents('.accordion_childItems').find('.menu_accord_content').stop().slideUp(300);
                        $(this).parents('.accordion_childItems').find('.menu_accord_title').removeClass('active');
                    }else{
                        $(this).parents('.accordion_childItems').find('.menu_accord_content').stop().slideUp(300);
                        $(this).next('.menu_accord_content').stop().slideDown(300);
                        $(this).parents('.accordion_childItems').find('.menu_accord_title').removeClass('active');
                        $(this).addClass('active');
                    }
                    return false;
                });
        },
        backToUp : function(){

            $('.content_container').scroll(function(){
                console.log('scrollTop')
                if ($('.content_container').scrollTop() > 100) {
                    $('.upToTop').fadeIn();
                } else { 
                    $('.upToTop').fadeOut();
                }
            }); 

            $('.upToTop').on('click', function(){ 
                $('html, body, .content_container').stop().animate({ scrollTop: 0 },600);
            });
    
        },
        tableFilter : function(){

            $('.zebra_table_search').on('click', function(){
                
                if($(this).prev().val() !=''){

                    $(this).parents('.th_dropdown').addClass("th_search_active");
                }
                else{
                    $(this).parents('.th_dropdown').removeClass("th_search_active");
                    console.log('empty')
                } 
            })

        },
        addCompte : function(){
            var i = 2;
            $("#ajouter").on('click', function () {
                if ($('#comptes').val() != '') {
                    $(".appenedCompte")
                    .append('<div id="textbox' + i + '" class="abonnement_fields added_comptes clearfix"><span>'+$('#comptes').val()+'</span><button href=""  class="unstylled_btn retirer cancel_btn">Retirer</button></div> ');
                    console.log($("#textbox" + i))
                    i++;
                    $('#comptes').val('');
                };
            })

            $(".appenedCompte").on("click",".retirer", function(){ //user click on remove text
                $(this).parent('div').remove(); i--;
            })
        },
        accountsSlider : function(){
            
            bp.dom.transferLists.slick({
                vertical : true,
                slidesToShow : 4,
                infinite: false,
                speed: 200
            })
        },
        mobileMenu : function(){
            if( $(window).width() <= 480){
                console.log('window width : ', $(window).width())
                $('.mobile_mainMenuItems li > div a img').each(function(){
                    // var imgSrc = $(this).attr('src')
                    // imgSrc = imgSrc.replace('@2x', '');
                    // $(this).attr('src', imgSrc);
                    $(this).attr('width', ($(this).width()/2));
                })
            }else{
                $('.mobile_mainMenuItems li > div a img').each(function(){
                    // var imgSrc = $(this).attr('src')
                    // imgSrc = imgSrc.replace('@2x', '');
                    // imgSrc = imgSrc.replace('.png', '@2x.png');
                    // $(this).attr('src', imgSrc);
                    $(this).attr('width', '');
                })
            }

            bp.dom.mobileMenuBtn.on('click', function(){
                $('#main_menu').css('left', 0);
                $('body').css('overflow', 'hidden');
            })
            bp.dom.mobileMenuChild.on('click', function(){
                $($(this).attr('href')).css('left', 0);
                $('.menu_item_child').removeClass('active');
                $(this).addClass('active');
                return false;
            })
            bp.dom.mobileMenuCloser.on('click', function(){
                bp.dom.mobileMenuList.css('left', '-120%');
                $('body').css('overflow', 'visible');
            })
            bp.dom.mobileMenuBack.on('click', function(){
                $(this).parents('.mobile_mainMenu').css('left', '-120%');
            })
        },
        manuallyStyledDropDown : function(){
            // To show/Hide the dropDown.
            bp.dom.selectCompteItem.on('click', function(){
                $('.select_compteItem').not($(this)).removeClass('active');
                $(this).toggleClass('active');
                return false;
            })

            // To get/replace the data selected.
            $('.compteItem_radio').on('change', function(){
                // To get the data.
                var compteName = $(this).attr('data-compteName');
                var compteNum = $(this).attr('data-compteNum');
                var compteSolde = $(this).attr('data-compteSolde');
                // To replace the data selected in the shown area.
                $(this).parents('ul').prev('.select_compteItem').find('.compteName').text(compteName);
                $(this).parents('ul').prev('.select_compteItem').find('.compteNum').text(compteNum);
                $(this).parents('ul').prev('.select_compteItem').find('.compteSolde').text(compteSolde);
                // To hide the dropDown.
                $(this).parents('ul').prev('.select_compteItem').removeClass('active');
            })
        },
        showAllComptes : function(){
            // To show/Hide the dropDown.
            bp.dom.showAllComptesBtn.on('click', function(){
                $(this).prev('.table_with_left_bars').find('tr.hidden').removeClass('hidden');
                $(this).hide();
                return false;
            })
        },
                showTableDetail : function(){
            bp.dom.showTableDetailBtn.on('click', function(){
                if ($(this).hasClass('active')) {
                    $('.hide_tr').hide();
                    $(this).removeClass('active')
                }else{
                    $('.hide_tr').hide()
                    bp.dom.showTableDetailBtn.removeClass('active')
                    $(this).parents('tr').next('.hide_tr').show()
                    $(this).addClass('active')
                }
                // $(this).parents('tr').next('.hide_tr').hide()

            })
        },
        shoHideGeneralMenu : function(){
            $('#public_humberger').click(function() {
                $('.menu').slideToggle("fast");
                $('body').toggleClass("modal-open");
                
                console.log('shoHideGeneralMenu')
        }); 
            $('.c-menu__link').click(function() {
                $('.menu').slideToggle("fast");
                $('body').toggleClass("modal-open");

                console.log('in a href')
        }); 
            
        },
        shoHideLinks : function(){
            bp.dom.links_btn.on('click', function(){
                bp.dom.link_list.toggleClass('active');
                return false;
            }); 
            
        },
        chartDevise: function(){
             if ($('#devise_chart').length) {

                // var ycategories = ['0', '2.5k', '5k', '7.5k', '10k', '12.5k', '15k'];
                    var chart = $('#devise_chart').highcharts({
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
                                tickInterval:  7 * 24 * 3600 * 1000,
                                endOnTick: false,
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
                                    // [Date.parse('11/02/2015'), 500],
                                    [Date.parse('11/09/2015'), 1500],
                                    [Date.parse('11/16/2015'), 1800],
                                    [Date.parse('11/23/2015'), 1900],
                                    [Date.parse('11/30/2015'), 1600],

                                    [Date.parse('12/07/2015'),2000],
                                    [Date.parse('12/14/2015'), 2500],
                                    [Date.parse('12/21/2015'), 1600],
                                    [Date.parse('12/28/2015'), 1500],

                                    [Date.parse('01/04/2016'), 2400],
                                    [Date.parse('01/11/2016'),2100],
                                    [Date.parse('01/18/2016'), 1500],
                                    [Date.parse('01/25/2016'), 2000]
                                ],
                                type: 'line',
                                lineWidth: 2,
                                stickyTracking: false,
                                dataGrouping: {
                                    approximation: "sum",
                                    enabled: true,
                                    units: [ ['week',[1]] ]
                                }
                            },
                            {
                                cursor: 'pointer',
                                color: '#e9932c',
                                allowPointSelect: true,
                                marker: {
                                    fillColor: '#fff',
                                    lineWidth: 2,
                                    radius: 6,
                                    lineColor: '#e9932c',
                                    states: {
                                        select: {
                                            fillColor: '#e9932c',
                                            radius: 8,
                                            lineColor: '#e9932c',
                                            lineWidth: 2
                                        }
                                    }
                                },
                                data: [
                                    // [Date.parse('11/02/2015'), 500],
                                    [Date.parse('11/09/2015'), 1000],
                                    [Date.parse('11/16/2015'), 1200],
                                    [Date.parse('11/23/2015'), 1300],
                                    [Date.parse('11/30/2015'), 1200],

                                    [Date.parse('12/07/2015'),1300],
                                    [Date.parse('12/14/2015'), 1900],
                                    [Date.parse('12/21/2015'), 1400],
                                    [Date.parse('12/28/2015'), 1000],

                                    [Date.parse('01/04/2016'), 1800],
                                    [Date.parse('01/11/2016'),1700],
                                    [Date.parse('01/18/2016'), 1000],
                                    [Date.parse('01/25/2016'), 1500]
                                ],
                                type: 'line',
                                lineWidth: 2,
                                stickyTracking: false,
                                dataGrouping: {
                                    approximation: "sum",
                                    enabled: true,
                                    units: [ ['week',[1]] ]
                                }
                            }
                            ]
                        });
            /*$('.reflowChart').on('click', function () {  
                chart.reflow()
            }); */

            $('.reflowChart').click(function() { 
                setTimeout( reflowChart, 260);
            })
            function reflowChart() {
                $('#devise_chart').highcharts().reflow();
            }
            window.reflowChart = reflowChart;
            };  
            $(window).trigger("resize");

                            
            
        },
        chartValeurs: function(){
             if ($('#valeurs_chart').length) {

                // var ycategories = ['0', '2.5k', '5k', '7.5k', '10k', '12.5k', '15k'];
                    var chart = $('#valeurs_chart').highcharts({
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
                        //tickInterval:  7 * 24 * 3600 * 1000,
                        endOnTick: false,
                        showFirstLabel: false,
                        startOnTick: false,
                        showLastLabel: true,
                        tickmarkPlacement: 'on',
                        categories: ['Dec', 'Jan', 'Fev'],
                        labels: {
                            align: 'left',
                            x: -19,
                            rotation: 45,
                            y: 6,
                            useHTML: true,
                            formatter: function() {
                                return '<span class="hc_valeur">' + Highcharts.dateFormat('%d/%m/%Y', this.value) + '</span>';
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
                            // [Date.parse('11/02/2015'), 500],
                            [Date.parse('11/09/2015'), 1500],
                            [Date.parse('11/16/2015'), 1800],
                            [Date.parse('11/23/2015'), 1900],
                            [Date.parse('11/30/2015'), 1600],

                            [Date.parse('12/07/2015'),2000],
                            [Date.parse('12/14/2015'), 2500],
                            [Date.parse('12/21/2015'), 1600],
                            [Date.parse('12/28/2015'), 1500],

                            [Date.parse('01/04/2016'), 2400],
                            [Date.parse('01/11/2016'),2100],
                            [Date.parse('01/18/2016'), 1500],
                            [Date.parse('01/25/2016'), 2000]
                        ],
                        type: 'line',
                        lineWidth: 2,
                        stickyTracking: false,
                        dataGrouping: {
                            approximation: "sum",
                            enabled: true,
                            units: [ ['week',[1]] ]
                        }
                    }
                    // {
                    //     cursor: 'pointer',
                    //     color: '#e9932c',
                    //     allowPointSelect: true,
                    //     marker: {
                    //         fillColor: '#fff',
                    //         lineWidth: 2,
                    //         radius: 6,
                    //         lineColor: '#e9932c',
                    //         states: {
                    //             select: {
                    //                 fillColor: '#e9932c',
                    //                 radius: 8,
                    //                 lineColor: '#e9932c',
                    //                 lineWidth: 2
                    //             }
                    //         }
                    //     },
                    //     data: [
                    //         // [Date.parse('11/02/2015'), 500],
                    //         [Date.parse('11/09/2015'), 1000],
                    //         [Date.parse('11/16/2015'), 1200],
                    //         [Date.parse('11/23/2015'), 1300],
                    //         [Date.parse('11/30/2015'), 1200],

                    //         [Date.parse('12/07/2015'),1300],
                    //         [Date.parse('12/14/2015'), 1900],
                    //         [Date.parse('12/21/2015'), 1400],
                    //         [Date.parse('12/28/2015'), 1000],

                    //         [Date.parse('01/04/2016'), 1800],
                    //         [Date.parse('01/11/2016'),1700],
                    //         [Date.parse('01/18/2016'), 1000],
                    //         [Date.parse('01/25/2016'), 1500]
                    //     ],
                    //     type: 'line',
                    //     lineWidth: 2,
                    //     stickyTracking: false,
                    //     dataGrouping: {
                    //         approximation: "sum",
                    //         enabled: true,
                    //         units: [ ['week',[1]] ]
                    //     }
                    // }
                    ]
                });
            $('.reflowValeursChart').on('click',function() { 
                setTimeout( reflowChart, 260);
                })
                function reflowChart() {
                    $('#valeurs_chart').highcharts().reflow();
                }
                window.reflowChart = reflowChart;
            };
            
        },
        dateDevise : function() {
            var myVariable = new Date();
            var makeDate = new Date(myVariable);
            $( "#deviseDate" ).datepicker({
                changeMonth: true,
                changeYear:true,
                inline: true,
                dateFormat: "dd/mm/yy"
            });           
            $('#deviseDate').datepicker('setDate',new Date(),$.datepicker.regional["fr"]);
        },
        dateValeur : function() {
            var myVariable = new Date();
            var makeDate = new Date(myVariable);
            $( "#valeurDate" ).datepicker({
                changeMonth: true,
                changeYear:true,
                inline: true,
                dateFormat: "dd/mm/yy"
            });           
            $('#valeurDate').datepicker('setDate',new Date(),$.datepicker.regional["fr"]);
        },
        dateValiditeTransfer: function(){
            var myVariable = new Date();
            var makeDate = new Date(myVariable);
            $( "#datepicker_validate" ).datepicker({
                minDate: makeDate,
                changeMonth: true,
                changeYear:true,
                inline: true,
                dateFormat: "dd/mm/yy"
            });
            $('#datepicker_validate').datepicker('setDate',new Date(),$.datepicker.regional["fr"]);
        },
        hightShartBtns : function() {
            

            $('.highchartbtns').on('click', function(){
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active') 
                }else{
                    $('.highchartbtns').removeClass('active') 
                    $(this).addClass('active')
                }
            });
            
        },
        mapsagence : function() {


            $(function(){
                var map;
                var LocsA = [
                    {
                        lat: 33.5947599,
                        lon: -7.616760699999986,
                        title: 'SEIZE (16) NOVEMBRE',
                        html: '<b>SEIZE (16) NOVEMBRE</b><br>Rue du 16 Novembre, Casablanca<br>0522-306195<br>0522-306201',
                        zoom: 12,
                        icon: 'img/icon/marker_agence.png',
                        animation: google.maps.Animation.DROP
                    },
                    {
                        lat: 33.5862298,
                        lon: -7.630440000000021,
                        title: 'ZERKTOUNI',
                        html: '<b>ZERKTOUNI</b><br>101 Boulevard Mohamed Zerktouni, Casablanca<br>0522-306195<br>0522-306201',
                        zoom: 12,
                        icon: 'img/icon/marker_center.png',
                        animation:google.maps.Animation.DROP
                    },
                    {
                        lat: 33.6072578,
                        lon: -7.525583900000015,
                        title: 'HAJ OMAR ABDELJALIL',
                        html: '<b>HAJ OMAR ABDELJALIL</b><br>KM 7, 3 ROUTE DE RABAT AIN SEBAA<br>0522-306195<br>0522-306201',
                        zoom: 12,
                        icon: 'img/icon/marker_groupe.png',
                        animation:google.maps.Animation.DROP
                    },
                    {
                        lat: 33.5862688,
                        lon: -7.611496299999999,
                        title: 'LIBERTE',
                        html: '<b>LIBERTE</b><br>Boulevard de la Liberté, Casablanca<br>0522-306195<br>0522-306201',
                        zoom: 12,
                        icon: 'img/icon/marker_agence.png',
                        animation:google.maps.Animation.DROP
                    },
                    
                ];
                  var center = new google.maps.LatLng(33.5862688, -7.611496299999999);
                  var styles = [[{
        url: 'img/icon/marker_groupe.png',
        height: 55,
        width: 30,
        anchor: [16, 0],
        textColor: '#ff00ff',
        textSize: 10
      }]];
        var map = new google.maps.Map(document.getElementById('gmap'), {
          zoom: 3,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

                var markers = [];
                var imageUrl = 'img/icon/marker_agence.png';
                console.log("LocsA count",LocsA.length)
        var infowindow = new google.maps.InfoWindow();

                for (var i = 0; i < LocsA.length; i++) {
                    console.log("LocsA lat", LocsA[i].lat)
                    console.log("LocsA lon", LocsA[i].lon)
                    var latLng = new google.maps.LatLng(LocsA[i].lat,
                            LocsA[i].lon);
                    var markerImage = new google.maps.MarkerImage(imageUrl,
                    new google.maps.Size(40, 60));   
                    //infowindow
                    var infowindow = new google.maps.InfoWindow({
                        content: LocsA[i].html}); 

                    var marker = new google.maps.Marker({
                    position: latLng,
                    icon: markerImage

                    });    
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                        infowindow.setContent(LocsA[i].html);
                        infowindow.open(map, marker);
                    }
                    })(marker, i)); 
                    markers.push(marker);
                }
                 var markerCluster = new MarkerClusterer(map, markers, {
          maxZoom: 12,
          gridSize: 10,
           styles: styles[0],
          imagePath: '../images/m'});

                 

                $(".loc_link").on('click',function(){
                    var loc = $(this).data('loc');
                    console.log(loc)
                    google.maps.event.trigger(markers[$(this).data(loc)], 'click');
                    $("#table_agence").css("display","none");
                    $('.table_devise h3').css("display","none");
                    $(".onglets_list li:last-child").addClass('active');
                    $(".onglets_list li:first-child").removeClass('active');
                    $(".google_maps_agence").css("visibility","visible");
                });
                $(".onglets_list li:last-child").on('click',function(){
                    $(".google_maps_agence").css("visibility","visible");
                    $(".google_maps_agence").css("height","auto");
                });
                $(".onglets_list li:first-child").on('click',function(){
                    $("#table_agence").css("display","block");
                    $('.table_devise h3').css("display","block");
                    $(".google_maps_agence").css("visibility","hidden");
                    $(".google_maps_agence").css("height","0");
                });


            });

        },
        hideShowErrorContact : function(){
            $('#contactId').on('click', function(){
                console.log('here')
                if ($('input[name=general_terms1]').is(":not(:checked)") || $('input[name=general_terms2]').is(":not(:checked)"))  {
                    $('input[name=general_terms1]').addClass("has_error");
                    $('input[name=general_terms2]').addClass("has_error");
                    $(".error").show()
                }else{ 
                    $(".error").hide();
                    $('input[name=general_terms1]').removeClass("has_error");
                    $('input[name=general_terms2]').removeClass("has_error"); 
                }
            })

            $('input[name=general_terms]').on('change', function(){
                if ($('input[name=general_terms]').is(":checked") || $('input[name=general_terms2]').is(":checked")){
                    $('input[name=general_terms1]').removeClass("has_error");
                    $('input[name=general_terms2]').addClass("has_error");
                    $(".error").hide()
                }
            })
        }



    };

//call init function on document ready
    $(function () {
        bp.init();
    });
})
(window.jQuery);


$(function() {
                  otable = $('#myTable').dataTable();
                  htable = $('#myOperation').dataTable();
                  hcartetable = $('#historiqueCarte').dataTable();
                  hcommandetable = $('#historiqueCommande').dataTable();
                  mesEmpruntstable = $('#mesEmprunts').dataTable();
                  detailEmprunt = $('#detailEmprunt').dataTable();
                  simulatorTable = $('#simulatorTable').dataTable();
                  ListeImpaye = $('#ListeImpaye').dataTable();
                  Synthese_myCartes = $('#Synthese_myCartes').dataTable();
                  operationAVenir = $('#operationAVenir').dataTable(); //Synthese_OPV
                  Synthese_OPV = $('#Synthese_OPV').dataTable(); //Synthese_OPV
                  historiqueCode = $('#historiqueCode').dataTable();
                  historiqueDetailCarte = $('#historiqueDetailCarte').dataTable();
                  historiqueMesPaiment = $('#historiqueMesPaiment').dataTable();
                  transfertHistoriquePaiement = $('#transfertHistoriquePaiement').dataTable();
                  historiqueTransfertMaroc = $('#historiqueTransfertMaroc').dataTable();
                  transfertHistoriquePaiement_ = $('#transfertHistoriquePaiement_').dataTable();
                  /*favorisPaiment = $('#favorisPaiment').dataTable();*/
                  PaimentChoixRadio = $('#PaimentChoixRadio').dataTable();
                  PaimentChoixChekbox = $('#PaimentChoixChekbox').dataTable();
                  otable1 = $('#favorisPaiment').dataTable();
                  historiqueVirement = $('#historiqueVirement').dataTable();
                  misedisposition = $('#misedisposition').dataTable();
                  favorisTransfert = $('#favorisTransfert').dataTable();
                  /*historiqueTransfertMaroc = $('#historiqueTransfertMaroc').dataTable();*/
                  mes_compte_contrat = $('#mes_compte_contrat').dataTable();
                  mes_compte_contrat_historique = $('#mes_compte_contrat_historique').dataTable();
                  mes_service_active = $('#mes_service_active').dataTable();
                  autres_service_disponible = $('#autres_service_disponible').dataTable();
                  list_beneficiaire = $('#list_beneficiaire').dataTable();
                  contrat_dassistance = $('#contrat_dassistance').dataTable();
                  mes_remboursements = $('#mes_remboursements').dataTable();
                  banc_dassistanceDetail = $('#banc_dassistanceDetail').dataTable();
                  banc_dassistance = $('#banc_dassistance').dataTable();
                  table_agence = $('#table_agence').dataTable();
                  carnet_dordre = $('#carnet_dordre').dataTable();




                })
                function filter_full_text(field_txt, i,target_table){ // valeur de champ, colonne cible, tableau cible
                    var text=$('#'+field_txt).val();
                    switch (target_table){
                        case "myTable": // Page compte > opération
                            otable.fnFilter(text, i, false, false, false, true);
                            break;
                        case "myOperation": // Page compte > opération
                            console.log('text',text + i)
                            htable.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueCarte": // Page carte & chèque > synthèse
                            console.log(text+i)
                            hcartetable.fnFilter(text, i, false, true, false, true);
                            break;
                        case "operationAVenir":   // Page carte & chèque > synthèse
                            console.log('operationAVenir',text + i)
                            operationAVenir.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueCommande":   // Page carte & chèque > synthèse
                            console.log('historiqueCommande',text + i)
                            hcommandetable.fnFilter(text, i, false, true, false, true);
                            break;
                        case "mesEmprunts": //Page emprunt > Emprunts
                            mesEmpruntstable.fnFilter(text, i, false, true, false, true);
                            break;
                        case "detailEmprunt": //Page emprunt > Détail emprunt
                            detailEmprunt.fnFilter(text, i, false, true, false, true);
                            break;
                        case "simulatorTable": // Page emprunt > Simulateur
                            simulatorTable.fnFilter(text, i, false, true, false, true);
                            break;
                        case "Synthese_myCartes": // Page carte & chèque > synthèse
                            console.log(text+i)
                            Synthese_myCartes.fnFilter(text, i, false, true, false, true);
                            break;
                        case "Synthese_OPV": // Page carte & chèque > synthèse
                            Synthese_OPV.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueCode": // Page carte & chèque > synthèse
                            historiqueCode.fnFilter(text, i, false, true, false, true);
                            break;
                        case "ListeImpaye": 
                            ListeImpaye.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueDetailCarte":
                            console.log("historiqueDetailCarte",i)
                            historiqueDetailCarte.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueMesPaiment":
                            console.log("historiqueMesPaiment",i)
                            historiqueMesPaiment.fnFilter(text, i, false, true, false, true);
                            break;
                        case "transfertHistoriquePaiement":
                            transfertHistoriquePaiement.fnFilter(text, i, false, true, false, true);
                            break;
                        /*case "historiqueTransfertMaroc":
                            historiqueTransfertMaroc.fnFilter(text, i, false, true, false, true);
                            break;*/
                        case "transfertHistoriquePaiement_":
                            transfertHistoriquePaiement_.fnFilter(text, i, false, true, false, true);
                            break;
                        case "PaimentChoixRadio":
                            PaimentChoixRadio.fnFilter(text, i, false, true, false, true);
                            break;
                        case "PaimentChoixChekbox":
                            PaimentChoixChekbox.fnFilter(text, i, false, true, false, true);
                            break;
                        case "favorisPaiment": // Page compte > opération
                            otable1.fnFilter(text, i, false, false, false, true);
                            break;
                        case "historiqueVirement": // Page compte > opération
                            historiqueVirement.fnFilter(text, i, false, true, false, true);
                            break;
                        case "misedisposition": // Page compte > opération
                            misedisposition.fnFilter(text, i, false, true, false, true);
                            break;
                        case "historiqueTransfertMaroc": // Page compte > opération
                            historiqueTransfertMaroc.fnFilter(text, i, false, true, false, true);
                            break;
                        case "favorisTransfert": // Page compte > opération
                            console.log("favoris transfert: ", text)
                            favorisTransfert.fnFilter(text, i, false, true, false, true);
                            break;
                        case "mes_compte_contrat":
                            mes_compte_contrat.fnFilter(text, i, false, true, false, true);
                            break;
                        case "mes_compte_contrat_historique":
                            mes_compte_contrat_historique.fnFilter(text, i, false, true, false, true);
                            break;
                        case "mes_service_active":
                            mes_service_active.fnFilter(text, i, false, true, false, true);
                            break;
                        case "autres_service_disponible":
                            autres_service_disponible.fnFilter(text, i, false, true, false, true);
                            break;
                        case "list_beneficiaire":
                            list_beneficiaire.fnFilter(text, i, false, true, false, true);
                            break;
                        case "contrat_dassistance":
                         console.log("contrat_dassistance: ", text +' '+i)
                            contrat_dassistance.fnFilter(text, i, false, true, false, true);
                            break;
                        case "mes_remboursements":
                         console.log("mes_remboursements: ", text +' '+i)
                            mes_remboursements.fnFilter(text, i, false, true, false, true);
                            break;

                        case "banc_dassistanceDetail":
                         console.log("banc_dassistanceDetail: ", text +' '+i)
                            banc_dassistanceDetail.fnFilter(text, i, false, true, false, true);
                            break;
                        case "banc_dassistance":
                         console.log("banc_dassistance: ", text +' '+i)
                            banc_dassistance.fnFilter(text, i, false, true, false, true);
                            break;
                        case "carnet_dordre":
                            console.log("carnet_dordre: ", text +' '+i)
                            carnet_dordre.fnFilter(text, i, false, true, false, true);
                            break;
                        case "table_agence":
                            console.log("carnet_dordre: ", text +' '+i)
                            table_agence.fnFilter(text, i, false, true, false, true);
                            break;

                    }


                }
                function htmlEntities(str) {
                return String(str).replace(/&/g, '&amp;')
                  .replace("*", '&#42;')
                  .replace(/>/g,     '&gt;')
                  .replace(/"/g, '&quot;');
                    }
                function filter_multi_choice(field_date,i,target_table) {

                  //build a regex filter string with an or(|) condition
                  var types = $('input:checkbox[name="'+field_date+'"]:checked').map(function() {
                    // return '^' + this.value + '\$';
                    return this.value;
                  }).get().join('|');
                  // Vérifier si toutes les case sont cochés, si "Tout" coché toute les valeurs sont cochés,
                    // sinon le checkbox "Tout" est décoché
                    console.log("types",types)
                  var allCheckBoxes =$('input:checkbox[name="'+ field_date +'"]:checkbox');
                  var theCheckBox = $('input:checkbox[name="'+field_date+'"]:checked');
                  console.log('input:checkbox[name="'+ field_date, allCheckBoxes.length)
                  console.log('input:checkbox[name="'+ field_date, theCheckBox.length)

                if (theCheckBox.length == allCheckBoxes.length) {
                   $('input.allDates_'+field_date).prop('checked', true);
                   console.log('input.allDates_'+field_date+ ' are checked')
                }
                else{
                    $('input.allDates_'+field_date).prop('checked', false);
                    console.log('input.allDates_'+field_date+ ' are not checked')
                }

                if (theCheckBox.length>0)  {
                    console.log('here','input.singleDate_'+field_date)
                    $('input.singleDate_'+field_date).parents('.th_dropdown').addClass("th_filter_active"); 
                }else{ 
                    console.log('there','input.singleDate_'+field_date)
                    $('input.singleDate_'+field_date).parents('.th_dropdown').removeClass("th_filter_active");
                }
                  
                  //filter in column 0, with an regex, no smart filtering, no inputbox,not case sensitive
                   switch (target_table){
                    case "myTable":
                        otable.fnFilter(types, i, true, false, false, false);
                        break;

                    case "historiqueCarte":  
                        hcartetable.fnFilter(types, i, true, false, false, false);
                        break;

                    case "operationAVenir": 
                        console.log('operationAVenir',types)
                        operationAVenir.fnFilter(types, i, true, false, false, false);
                        break;

                    case "myOperation":
                        console.log('types',types + i)
                        htable.fnFilter(types, i, true, false, false, false);
                        break;

                    case "Synthese_myCartes": 
                        Synthese_myCartes.fnFilter(types, i, true, false, false, false);
                        break;

                    case "Synthese_OPV":                     
                        Synthese_OPV.fnFilter(types, i, true, false, false, false);
                        break;
                  
                    case "historiqueCode":
                        historiqueCode.fnFilter(types, i, true, false, false, false);
                        break;

                    case "historiqueCommande":
                        hcommandetable.fnFilter(types, i, true, false, false, false);
                        break; 
                           
                    case "mesEmprunts":
                        mesEmpruntstable.fnFilter(types, i, true, false, false, false);
                        break;
                        
                    case "mesEmprunts":
                        mesEmpruntstable.fnFilter(types, i, true, false, false, false);
                        break;
                    case "historiqueDetailCarte":
                        historiqueDetailCarte.fnFilter(types, i, true, false, false, false);
                        break;
                   case "favorisPaiment":
                       otable1.fnFilter(types, i, true, false, false, false);
                       break;
                   case "historiqueVirement":
                       historiqueVirement.fnFilter(types, i, true, false, false, false);
                       break;
                   case "misedisposition":
                       misedisposition.fnFilter(types, i, true, false, false, false);
                       break;
                   /*case "historiqueTransfertMaroc":
                       historiqueTransfertMaroc.fnFilter(types, i, true, false, false, false);
                       break;*/
                   case "transfertHistoriquePaiement":
                       transfertHistoriquePaiement.fnFilter(types, i, true, false, false, false);
                       break;
                   case "historiqueTransfertMaroc":
                       historiqueTransfertMaroc.fnFilter(types, i, true, false, false, false);
                       break;
                   case "transfertHistoriquePaiement_":
                       transfertHistoriquePaiement_.fnFilter(types, i, true, false, false, false);
                       break;
                   case "list_beneficiaire":
                        list_beneficiaire.fnFilter(types, i, true, false, false, false);
                       break; 
                   case "historiqueMesPaiment":
                       historiqueMesPaiment.fnFilter(types, i, true, false, false, false);
                       break;
                   case "mes_compte_contrat":
                       mes_compte_contrat.fnFilter(types, i, true, false, false, false);
                       break;
                   case "mes_compte_contrat_historique":
                       mes_compte_contrat_historique.fnFilter(types, i, true, false, false, false);
                       break;
                   case "mes_service_active":
                       mes_service_active.fnFilter(types, i, true, false, false, false);
                       break;
                   case "autres_service_disponible":
                       autres_service_disponible.fnFilter(types, i, true, false, false, false);
                       break;
                   case "contrat_dassistance":
                       contrat_dassistance.fnFilter(types, i, true, false, false, false);
                       break;
                   case "mes_remboursements":
                       mes_remboursements.fnFilter(types, i, true, false, false, false);
                       break; 
                   case "banc_dassistanceDetail":
                       banc_dassistanceDetail.fnFilter(types, i, true, false, false, false);
                       break;
                   case "banc_dassistance":
                       banc_dassistance.fnFilter(types, i, true, false, false, false);
                       break;
                   case "carnet_dordre":
                       carnet_dordre.fnFilter(types, i, true, false, false, false);
                       break;
                   case "table_agence":
                       table_agence.fnFilter(types, i, true, false, false, false);
                        break;
                    }

                }
                function select_all(field_all, field_date,i,target_table){
                    if($('#' + field_all).prop('checked')){
                         $('input:checkbox[name="'+ field_date +'"]:checkbox').each(function() {
                             this.checked = true;
                            console.log('(field_all, field_date,i,target_table)',(field_all, field_date,i,target_table))
                    
                         });
                         filter_multi_choice(field_date,i,target_table);

                    }else{
                         $('input:checkbox[name="'+ field_date +'"]:checkbox').each(function() {
                             this.checked = false;
                             console.log('(field_all, field_date,i,target_table)',(field_all, field_date,i,target_table))
                    
                        $('input.singleDate_'+field_date).parents('.th_dropdown').removeClass("th_filter_active");
                         });
                    }
                }
                i=0; // intialiser compteur mobile
                j=0;
                $(".sort_calendar").on('click',function(){
                            console.log("j==>",j)
                            j++;
                            if (j%2==0) {
                                $(this).addClass('active');
                            }else{
                                $(this).removeClass('active');
                            }


                        });
                $(".sort_mnt").click(function(){
                console.log("j==>",j)
                    j++;
                    if (j%2==0){
                        $(".sort_mnt").addClass('active');
                    }else{
                        $(".sort_mnt").removeClass('active');
                    }
                });
                function custom_sort(col, target_table){ // Tri pour mobile
                    //console.log("sorting ....");

                    order=(i%2==0)?'desc':'asc';                                       
                    i++;
                    switch (target_table){
                    case "myTable":                       
                        otable.fnSort([col, order]);
                        /*var order = otable.order();
                        alert( 'Table is ordered by column: ' + order[0][0] + ', direction:' + order[0][1]);
                        // console.log("otable.fnSettings().aaSorting",otable.fnSettings().aaSorting)
                        //    otable.fnSort( [[col, $("th.test_sort").attr('data-sortdir')]]);
                        */
                        
                        //historyPage.fnSort([index, ]);
                        break;
                    case "historiqueCarte":  
                        hcartetable.fnSort([col, order]);
                        break;

                    case "operationAVenir": 
                        operationAVenir.fnSort([col, order]);
                        break;

                    case "myOperation":
                        htable.fnSort([col, order]);
                        break;
                    case "Synthese_myCartes":
                        Synthese_myCartes.fnSort([col, order]);
                        break;
                    case "Synthese_OPV":
                        Synthese_OPV.fnSort([col, order]);
                        break;						
                    case "historiqueCode":
                        historiqueCode.fnSort([col, order]);
                        break;

                    case "historiqueCommande":
                        hcommandetable.fnSort([col, order]);
                        break; 
                           
                    case "mesEmprunts":
                        mesEmpruntstable.fnSort([col, order]);
                        break;

                    case "ListeImpaye":
                        ListeImpaye.fnSort([col, order]);
                        break;
                    case "historiqueDetailCarte":
                        historiqueDetailCarte.fnSort([col, order]);
                        break;
                    case "historiqueMesPaiment":
                        historiqueMesPaiment.fnSort([col, order]);
                        break;
                    case "transfertHistoriquePaiement":
                        transfertHistoriquePaiement.fnSort([col, order]);
                        break;
                    /*case "historiqueTransfertMaroc":
                        historiqueTransfertMaroc.fnSort([col, order]);
                        break;*/
                    case "transfertHistoriquePaiement_":
                        transfertHistoriquePaiement_.fnSort([col, order]);
                        break;
                   /* case "favorisPaiment":
                        favorisPaiment.fnSort([col, order]);
                        break;*/
                case "PaimentChoixRadio":
                    PaimentChoixRadio.fnSort([col, order]);
                    break;
                case "PaimentChoixChekbox":
                    PaimentChoixChekbox.fnSort([col, order]);
                    break;
                case "favorisPaiment":
                    otable1.fnSort([col, order]);
                    break;
                case "historiqueVirement":
                    historiqueVirement.fnSort([col, order]);
                    break;
                case "misedisposition":
                    misedisposition.fnSort([col, order]);
                    break;
                case "historiqueTransfertMaroc":
                    historiqueTransfertMaroc.fnSort([col, order]);
                    break;
                case "mes_compte_contrat":
                    mes_compte_contrat.fnSort([col, order]);
                    break;
                case "mes_compte_contrat_historique":
                    mes_compte_contrat_historique.fnSort([col, order]);
                    break;
                case "mes_service_active":
                    mes_service_active.fnSort([col, order]);
                    break;
                case "autres_service_disponible":
                    autres_service_disponible.fnSort([col, order]);
                    break;
                case "mes_remboursements":
                    mes_remboursements.fnSort([col, order]);
                    break;
                case "banc_dassistanceDetail":
                    banc_dassistanceDetail.fnSort([col, order]);
                    break;
                case "carnet_dordre":
                    carnet_dordre.fnSort([col, order]);
                    break;


                }
                    

                }
                function addSpace(nStr){
                    nStr += '';
                    x = nStr.split('.');
                    x1 = x[0];
                    x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1)) {
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');                      

                    }
                    return x1 + x2;
                }
 
                /* step PAYER UNE FACTURE */
                if($(".step_paiment").length){
                 $(".step_paiment").on('click',function(){
                     if($(this).attr('data-confirmation') == 'true'){
                        $('.steps_grid').hide();
                        $('.steps_grid').eq($(this).attr('data-target')).show();
                         $('.steps_grid1').hide();
                         $('.steps_grid1').eq($(this).attr('data-target')).show();
                        $('#tabs li').removeClass('active').eq($(this).attr('data-target')).addClass('active');
                         $('#tabs1 li').removeClass('active').eq($(this).attr('data-target')).addClass('active');
                        $('.content_container, html, body').stop().animate({ scrollTop: 0 },300); 
                     }
                 });
                $(".step_paiment_precedent").on('click',function(){
                        $('.steps_grid').hide();
                        $('.steps_grid').eq($(this).attr('data-target')-2).show();
                        $('#tabs li').removeClass('active').eq($(this).attr('data-target')-2).addClass('active');
                        $('#tabs1 li').removeClass('active').eq($(this).attr('data-target')-2).addClass('active');
                        $('.content_container, html, body').stop().animate({ scrollTop: 0 },300);
                });

                }
                var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

function diff(from_picker_id, to_dt_picker_id) { // CALCULE LA DATE A PARTIR DES ID DES CHAMPS DATEPICKERS
    var arr = [];
    var from = $("#"+from_picker_id).datepicker('getDate');
    var to = $("#"+to_dt_picker_id).datepicker('getDate');
    var datFrom = new Date(from);
    var datTo = new Date(to);
    var fromYear =  datFrom.getFullYear();
    var toYear =  datTo.getFullYear();
    var diffDays = datTo-datFrom;


    return diffDays;
}
function getfirstdayofmonth(from_picker_id, to_dt_picker_id) {  // FONCTION POUR DETERMINER LES INTERVALLE DANS LE GRAPHE SELON DATE CHOISIE(DATEPICK1, DATEPICK2)
    var arr = [];
    var from = $("#"+from_picker_id).datepicker('getDate');
    var to = $("#"+to_dt_picker_id).datepicker('getDate');
    var datFrom = new Date(from);
    var datTo = new Date(to);
    var fromYear =  datFrom.getFullYear();
    console.log("fromYear", $("#datepicker1").datepicker('getDate'))
    var toYear =  datTo.getFullYear();
    var diffYear = (12 * (toYear - fromYear)) + datTo.getMonth()+1;
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);
    console.log("firstDay",firstDay)
    console.log("lastDay",lastDay)
    console.log("calculating months....., from"+from + ' to ' + to)
    for (var i = datFrom.getMonth(); i <= diffYear; i++) {
    console.log("i=>",i)
        firstDay =  Date.UTC(datFrom.getFullYear(), i, 1);//new Date(datFrom.getFullYear(), i, 1);
        arr.push(firstDay);
    }
    return arr;
}
function nFormatter(num, digits) { // FORMAT LES GRAND NOMBRE MILLIERS AU K, MILLIONS A M,......
  isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber =  (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else  if (num >= 1000) {
        formattedNumber =  (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }   
    if(isNegative) { formattedNumber = '-' + formattedNumber }
    return formattedNumber;
}
function check_solde(solde){ 
    var date_solde=$("#datepicker1").datepicker('getDate');
    console.log("date_solde",Date.UTC(date_solde.getFullYear(),date_solde.getMonth(),date_solde.getDate()))
    /*var date_fin=$("#"+to_dt_picker_id).datepicker('getDate');
    console.log("date_solde",Date.UTC(date_fin.getFullYear(),date_fin.getMonth(),date_fin.getDate()))*/
    return solde>=date_solde;
}
function tick_y(ecart_type){
    return Math.round(ecart_type/8);

}
function EvolutionChart2(chartid,data,date1,date2, ecart_type) { // FONCTION PRINCIPALE DE GRAPHE

            if ($('#'+chartid).length) {
                    Highcharts.setOptions({
                        lang: {                                                        
                            shortMonths: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'AoÃ»t', 'Sept', 'Oct', 'Nov', 'DÃ©c'],
                            weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                            months: ['Janvier', 'FÃ©vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'AoÃ»t', 'Septembre', 'Octobre', 'Novembre', 'DÃ©cembre'],
                            noData: 'Pas dâ€™information Ã  afficher',
                            loading: 'Chargement en coursâ€¦,',
                            resetZoom:'RÃ©initialiser le zoom',
                        }
                    });                
                
                console.log("tick_y(ecart_type)",positiontick_y)
                var diffdate=diff("datepicker1", "datepicker2"); // CALCULE DE DIFFERENCE DE DATE
                var positiontick=getfirstdayofmonth("datepicker1", "datepicker2");   // DETERMINER L'INTERVALLE X
                var positiontick_y=tick_y(ecart_type); // DETERMINER L'INTERVALLE Y
                console.log("positiontick_y",positiontick_y)
                var interval = check_solde("datepicker1", "datepicker2"); 
                var chart = $('#'+chartid).highcharts({
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
                    //tickInterval:  7 * 24 * 3600 * 1000,
                    //minTickInterval: 28*24*3600*1000,
                    endOnTick: false,
                    showFirstLabel: true,
                    startOnTick: false,
                    showLastLabel: true, 
                    tickmarkPlacement: 'on',
                    tickPositioner: function() {
                    var ticks =positiontick;
            //dates.info defines what to show in labels
            //apparently dateTimeLabelFormats is always ignored when specifying tickPosistioner
                        ticks.info = {
                            unitName: "month", //unitName: "day",
                            higherRanks: {} // Omitting this would break things
                        };           
                        return ticks;
                    },
                    labels: {
                        style: {
                            fontFamily: 'Segoe UI, Tahoma',
                            fontSize: '11px',
                            color: '#a1a1a1'
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
                    tickInterval: positiontick_y,
                    tickmarkPlacement: 'on',
                    // categories: ycategories,
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function () {
                          
                            return nFormatter(this.value,1);
                            
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
    global: {
        useUTC: false
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
                    data: data,
                    type: 'line',
                    lineWidth: 2,
                    stickyTracking: false,
                     threshold: 0,
                    dataGrouping: {
                        approximation: "sum",
                        enabled: true,
                        units: [ ['week',[1]] ]
                    }
                }]
                });
            };
        }
// Returns a value checked by the user
function checkTablesValues(tableId, valuePos){
    var selectedVal;
    setTimeout(function(){
        selectedVal = $('#' + tableId).find('tr.selected').find('td').eq(valuePos).text();
        console.log(selectedVal);
    },10)
}

// Returns multi values checked by the user
function checkMultiTablesValues(tableId, valuePos){
    var multiSelectedVal = new Array();
    var i;
    setTimeout(function(){
        $('#' + tableId).find('tr.selected').each(function(){
            console.log($(this).find('td').eq(valuePos).text())
            multiSelectedVal.push($(this).find('td').eq(valuePos).text());
        })
        
        console.warn(multiSelectedVal);
        // $('#PaimentChoixChekbox_wrapper').append(multiSelectedVal + '     ||     ')
    },10)


}