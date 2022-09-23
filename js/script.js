'use strict'

window.addEventListener('DOMContentLoaded', function() {

    const open = document.querySelector('.menu__hamburger'),
        close = document.querySelector('.overlaymenu-close'),
        closeOverlay = document.querySelector('.overlaymenu-lay'),
        overlayMenu = document.querySelector('.overlaymenu');


    open.addEventListener('click', () => {
        if (!overlayMenu.classList.contains('overlaymenu_active')) {
                overlayMenu.classList.add('overlaymenu_active');
        } else {
            overlayMenu.classList.remove('overlaymenu_active');
        }
    });
    overlayMenu.addEventListener('click', (e) => {
        if(e.target === closeOverlay || e.target === close) {
            overlayMenu.classList.remove('overlaymenu_active');
        } 
        
    });

// overlay-menu

    const tabsPool = document.querySelector('.tabs__catalog-head'),
        tabsItem = document.querySelectorAll('.tabs__catalog'),
        tabsPrevArrow = document.querySelector('.tabs__nav-arrows_prev'),
        tabsNextArrow = document.querySelector('.tabs__nav-arrows_next'),
        activeLine = document.querySelector('.tabs__divider-active'),
        tabsContent = document.querySelectorAll('.tabs__catalog-content');

    function ItemsClassRemove (elem, elemClass) {
        elem.forEach(item => {
                item.classList.remove(elemClass);
        });
    };

    function tabsToggler () {
        tabsItem.forEach((item, index) => {
            activeLine.classList.remove(`tabs__divider-active_item-${index + 1}`);
            if(item.classList.contains('tabs__catalog_active')){
                console.log(index);
                tabsContent[index].classList.add('tabs__catalog-content_active');
                if (tabsContent[index].classList.contains('tabs__catalog-content_active')) {
                    activeLine.classList.add(`tabs__divider-active_item-${index + 1}`);
                }
            }
        });
    };

    function tabs () {
        tabsPool.addEventListener('click', (e) => {
            ItemsClassRemove(tabsItem, 'tabs__catalog_active');
            ItemsClassRemove(tabsContent, 'tabs__catalog-content_active');
            if (e.target.classList.contains('tabs__catalog')) {
                e.target.classList.add('tabs__catalog_active');
                tabsToggler ();
            };
        });
    };

    tabs ();
// tabs


const sliderMenu = document.querySelector('.overlaymenu-sliderwrapper'),
    sliderMenuItems = document.querySelectorAll('.overlaymenu-sliderwrapper__item'),
    sliderMenuDots = document.querySelectorAll('.overlaymenu-sliderwrapper__dot');

    let slideIndex = 1;
    function menuSliderToggle () {
        setInterval(function () {
            let n = 1;
            showSlide(slideIndex += n);
            toggleDots ();
        }, 3000);
    };
    menuSliderToggle();

    function showSlide () {
        if (slideIndex > sliderMenuItems.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = sliderMenuItems.length;
        }
        ItemsClassRemove (sliderMenuItems, 'overlaymenu-sliderwrapper__item_active');
        ItemsClassRemove (sliderMenuDots, 'overlaymenu-sliderwrapper__dot_active');

        sliderMenuItems[slideIndex - 1].classList.add('overlaymenu-sliderwrapper__item_active');
        sliderMenuDots[slideIndex - 1].classList.add('overlaymenu-sliderwrapper__dot_active');
    };

    for(let i = 0; i < sliderMenuItems.length; i++) {
        sliderMenuItems[slideIndex].classList.remove('overlaymenu-sliderwrapper__item_active');
    };
    
    function toggleDots () {
        sliderMenuItems[slideIndex - 1].classList.add('overlaymenu-sliderwrapper__item_active');
        sliderMenuDots.forEach((item, index) => {
            item.addEventListener('click', () => {
                ItemsClassRemove(sliderMenuItems, 'overlaymenu-sliderwrapper__item_active');
                ItemsClassRemove(sliderMenuDots, 'overlaymenu-sliderwrapper__dot_active');
                sliderMenuItems[index].classList.add('overlaymenu-sliderwrapper__item_active');
                item.classList.add('overlaymenu-sliderwrapper__dot_active');
            })
        })
    };
    toggleDots ();

    // menuSlider

    const sliderBtnNext = document.querySelectorAll('.slider__btn-next'),
        sliderBtnPrev = document.querySelectorAll('.slider__btn-prev'),
        sliderWrapper = document.querySelector('.slider__wrapper'),
        width = window.getComputedStyle(sliderWrapper).width,
        slidersField = document.querySelectorAll('.slider__field'),
        sliderInner = document.querySelector('.slider__inner');

    let offset = 0;

    slidersField.forEach(slide => {
        slide.style.width = width;
    });

    sliderBtnNext.forEach(button => {
        button.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slidersField.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        });
    });

    sliderBtnPrev.forEach(button => {
        button.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slidersField.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        });
    });

    // sectionSlider

});