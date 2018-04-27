require(['swiper'], function(swiper) {
    function ban() {
        new Swiper('.ban', {
            autoplay: 1000,
            loot: true
        })
    }
    return ban
})