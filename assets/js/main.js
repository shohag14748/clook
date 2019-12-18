$(document).ready(function () {
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if ($(window).width() > 768) {

            //        fot 1

            if (wScroll > $('.parallax').offset().top + $(window).height()) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height()) * ((32.7 / $(window).height()) * 2);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height()) * ((15 / $(window).height()) * 2);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor1').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });
                $('.box1').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });

                var off = wScroll - $('.parallax').offset().top - 100 - $(window).height();
                var show = (wScroll - $('.parallax').offset().top - $(window).height() - 100) * ((1 / $(window).height()) * 2);
                $('.rack1-details li').each(function (e) {
                    var offval = Math.min(100, (50 - (off / 5)) * (e + 1));
                    var offval = Math.max(0, offval);
                    $(this).css({
                        'top': offval + 'px',
                        'opacity': show * 1.5
                    });
                })
                var title = Math.min(0, off / 5 - 50);
                $('.rack1-details h2').css({
                    'transform': 'translateX(' + -title + 'px)',
                    'opacity': show
                });

            }
            if (wScroll > $('.parallax').offset().top + $(window).height() + ($(window).height() / 4) * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() - ($(window).height() / 4) * 3) * ((32.7 / $(window).height()) * 4);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() - ($(window).height() / 4) * 3) * ((15 / $(window).height()) * 4);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor1').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });
                $('.box1').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });

                var opasity = (wScroll - $('.parallax').offset().top - $(window).height() - ($(window).height() / 4) * 3) * ((1 / $(window).height()) * 4);
                $('.rack1-details h2,.rack1-details li').css({
                    'opacity': 1 - opasity
                });
            }

            //        fot 2

            if (wScroll > $('.parallax').offset().top + $(window).height() * 2) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 2) * ((32.7 / $(window).height()) * 2);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 2) * ((15 / $(window).height()) * 2);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor2').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });
                $('.box2').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });

                var off = wScroll - $('.parallax').offset().top - 100 - $(window).height() * 2;
                var show = (wScroll - $('.parallax').offset().top - $(window).height() * 2 - 100) * ((1 / $(window).height()) * 2);
                $('.rack2-details li').each(function (e) {
                    var offval = Math.min(100, (50 - (off / 5)) * (e + 1));
                    var offval = Math.max(0, offval);
                    $(this).css({
                        'top': offval + 'px',
                        'opacity': show * 1.5
                    });
                })
                var title = Math.min(0, off / 5 - 50);
                $('.rack2-details h2').css({
                    'transform': 'translateX(' + -title + 'px)',
                    'opacity': show
                });

            }
            if (wScroll > $('.parallax').offset().top + $(window).height() * 2 + ($(window).height() / 4) * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 2 - ($(window).height() / 4) * 3) * ((32.7 / $(window).height()) * 4);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 2 - ($(window).height() / 4) * 3) * ((15 / $(window).height()) * 4);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor2').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });
                $('.box2').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });

                var opasity = (wScroll - $('.parallax').offset().top - $(window).height() * 2 - ($(window).height() / 4) * 3) * ((1 / $(window).height()) * 4);
                $('.rack2-details h2,.rack2-details li').css({
                    'opacity': 1 - opasity
                });
            }


            //        fot 3

            if (wScroll > $('.parallax').offset().top + $(window).height() * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 3) * ((32.7 / $(window).height()) * 2);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 3) * ((15 / $(window).height()) * 2);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor3').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });
                $('.box3').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });

                var off = wScroll - $('.parallax').offset().top - 100 - $(window).height() * 3;
                var show = (wScroll - $('.parallax').offset().top - $(window).height() * 3 - 100) * ((1 / $(window).height()) * 2);
                $('.rack3-details li').each(function (e) {
                    var offval = Math.min(100, (50 - (off / 5)) * (e + 1));
                    var offval = Math.max(0, offval);
                    $(this).css({
                        'top': offval + 'px',
                        'opacity': show * 1.5
                    });
                })
                var title = Math.min(0, off / 5 - 50);
                $('.rack3-details h2').css({
                    'transform': 'translateX(' + -title + 'px)',
                    'opacity': show
                });

            }
            if (wScroll > $('.parallax').offset().top + $(window).height() * 3 + ($(window).height() / 4) * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 3 - ($(window).height() / 4) * 3) * ((32.7 / $(window).height()) * 4);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 3 - ($(window).height() / 4) * 3) * ((15 / $(window).height()) * 4);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor3').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });
                $('.box3').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });

                var opasity = (wScroll - $('.parallax').offset().top - $(window).height() * 3 - ($(window).height() / 4) * 3) * ((1 / $(window).height()) * 4);
                $('.rack3-details h2,.rack3-details li').css({
                    'opacity': 1 - opasity
                });
            }



            //        fot 4

            if (wScroll > $('.parallax').offset().top + $(window).height() * 4) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 4) * ((32.7 / $(window).height()) * 2);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 4) * ((15 / $(window).height()) * 2);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor4').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });
                $('.box4').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });

                var off = wScroll - $('.parallax').offset().top - 100 - $(window).height() * 4;
                var show = (wScroll - $('.parallax').offset().top - $(window).height() * 4 - 100) * ((1 / $(window).height()) * 2);
                $('.rack4-details li').each(function (e) {
                    var offval = Math.min(100, (50 - (off / 5)) * (e + 1));
                    var offval = Math.max(0, offval);
                    $(this).css({
                        'top': offval + 'px',
                        'opacity': show * 1.5
                    });
                })
                var title = Math.min(0, off / 5 - 50);
                $('.rack4-details h2').css({
                    'transform': 'translateX(' + -title + 'px)',
                    'opacity': show
                });

            }
            if (wScroll > $('.parallax').offset().top + $(window).height() * 4 + ($(window).height() / 4) * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 4 - ($(window).height() / 4) * 3) * ((32.7 / $(window).height()) * 4);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 4 - ($(window).height() / 4) * 3) * ((15 / $(window).height()) * 4);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor4').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });
                $('.box4').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });

                var opasity = (wScroll - $('.parallax').offset().top - $(window).height() * 4 - ($(window).height() / 4) * 3) * ((1 / $(window).height()) * 4);
                $('.rack4-details h2,.rack4-details li').css({
                    'opacity': 1 - opasity
                });
            }


            //        fot 5

            if (wScroll > $('.parallax').offset().top + $(window).height() * 5) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 5) * ((32.7 / $(window).height()) * 2);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 5) * ((15 / $(window).height()) * 2);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor5').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });
                $('.box5').css({
                    'transform': 'translate(' + b + '%,' + d + '%)'
                });

                var off = wScroll - $('.parallax').offset().top - 100 - $(window).height() * 5;
                var show = (wScroll - $('.parallax').offset().top - $(window).height() * 5 - 100) * ((1 / $(window).height()) * 2);
                $('.rack5-details li').each(function (e) {
                    var offval = Math.min(100, (50 - (off / 5)) * (e + 1));
                    var offval = Math.max(0, offval);
                    $(this).css({
                        'top': offval + 'px',
                        'opacity': show * 1.5
                    });
                })
                var title = Math.min(0, off / 5 - 50);
                $('.rack5-details h2').css({
                    'transform': 'translateX(' + -title + 'px)',
                    'opacity': show
                });

            }
            if (wScroll > $('.parallax').offset().top + $(window).height() * 5 + ($(window).height() / 4) * 3) {
                var left = (wScroll - $('.parallax').offset().top - $(window).height() * 5 - ($(window).height() / 4) * 3) * ((32.7 / $(window).height()) * 4);
                var a = Math.max(0, left);
                var b = Math.min(32.7, a);
                var top = (wScroll - $('.parallax').offset().top - $(window).height() * 5 - ($(window).height() / 4) * 3) * ((15 / $(window).height()) * 4);
                var c = Math.max(0, top);
                var d = Math.min(15, c);
                $('.dor5').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });
                $('.box5').css({
                    'transform': 'translate(' + (32.7 - b) + '%,' + (15 - d) + '%)'
                });

                var opasity = (wScroll - $('.parallax').offset().top - $(window).height() * 5 - ($(window).height() / 4) * 3) * ((1 / $(window).height()) * 4);
                $('.rack5-details h2,.rack5-details li').css({
                    'opacity': 1 - opasity
                });
            }


            if (wScroll < $('.parallax').offset().top + $(window).height() || wScroll > $('.parallax').offset().top + $(window).height() * 2) {
                $('.dor1').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
                $('.box1').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
            }
            if (wScroll < $('.parallax').offset().top + $(window).height() * 2 || wScroll > $('.parallax').offset().top + $(window).height() * 3) {
                $('.dor2').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
                $('.box2').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
            }
            if (wScroll < $('.parallax').offset().top + $(window).height() * 3 || wScroll > $('.parallax').offset().top + $(window).height() * 4) {
                $('.dor3').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
                $('.box3').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
            }
            if (wScroll < $('.parallax').offset().top + $(window).height() * 4 || wScroll > $('.parallax').offset().top + $(window).height() * 5) {
                $('.dor4').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
                $('.box4').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
            }
            if (wScroll < $('.parallax').offset().top + $(window).height() * 5 || wScroll > $('.parallax').offset().top + $(window).height() * 6) {
                $('.dor5').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
                $('.box5').css({
                    'transform': 'translate(' + 0 + '%,' + 0 + '%)'
                });
            }

        }

        if ($(window).width() > 768) {
            if (wScroll >= $('.parallax-initial-image-content img').offset().top + 15 - ($(window).height() - $('.parallax-initial-image-content img').height()) / 2) {
                $('.parallax-initial-image-content').css({
                    'opacity': 0
                });
                $('.main-content').css({
                    'opacity': 1
                });
            } else {
                $('.main-content').css({
                    'opacity': 0
                });
                $('.parallax-initial-image-content').css({
                    'opacity': 1
                });
            }
        } else {
            $('.parallax-initial-image-content').css({
                'opacity': 1
            });
            $('.main-content').css({
                'opacity': 0
            });
        }


    });


    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.inner ').attr('style', '');
            $('.single-detail h2').attr('style', '');
            $('.single-detail li').attr('style', '');
        }
    });

    $('#accordion button').on('click', function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $('#accordion button').removeClass('active');
        } else {
            $('#accordion button').removeClass('active');
            $(this).addClass('active');
        }
    });

    var scrollLink = $('.smooth');
    scrollLink.on("click",function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

});
