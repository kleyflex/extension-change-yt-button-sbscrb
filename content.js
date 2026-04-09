function styleButton(btn) {
    btn.style.cssText = `
    background: linear-gradient(180deg, #266c29 0%, #2a9c00 100%) !important;
    color: #ffffff !important;
    border: none !important;
    border-radius: 6px !important;
    padding: 0 16px !important;
    font-weight: bold !important;
    font-size: 14px !important;
    box-shadow: 0 3px 6px rgba(0, 28, 1, 0.5), inset 0 1px 0 rgba(136, 255, 156, 0.15) !important;
    cursor: pointer !important;
    transition: box-shadow 0.1s !important;
    `
}

function handleFindButtons() {
    const subscribeBtn = document.querySelector('#subscribe-button-shape button');

    const subscribedBtn = document.querySelector('ytd-subscription-notification-toggle-button-renderer-next button');

    const channelBtn = document.querySelector('yt-subscribe-button-view-model .ytSubscribeButtonViewModelContainer button.yt-spec-button-shape-next--filled')

    const channelSubscribedBtn = document.querySelector('yt-subscribe-button-view-model .ytSubscribeButtonViewModelContainer button.yt-spec-button-shape-next--tonal')

    if (subscribeBtn) {
        const span = subscribeBtn.querySelector('.yt-core-attributed-string');

        if (span && span.textContent.trim() === 'Подписаться') {
            span.textContent = 'Прокачать';
            styleButton(subscribeBtn);
        }
    }

    if (subscribedBtn) {
        const span = subscribedBtn.querySelector('.yt-core-attributed-string');

        if (span && span.textContent.trim() === 'Вы подписаны') {
            span.textContent = 'Стал качком';
            styleButton(subscribedBtn);
        }
    }

    if (channelBtn) {
        const div = channelBtn.querySelector('.yt-spec-button-shape-next__button-text-content');
        
        if (div) {
            const text = div.textContent.trim();
            if (text === 'Подписаться') {
                div.textContent = 'Прокачать';
                styleButton(channelBtn);
            }
        }
    }

    if (channelSubscribedBtn) {
        const div = channelSubscribedBtn.querySelector('.yt-spec-button-shape-next__button-text-content');
        
        if (div) {
            const text = div.textContent.trim();
            if (text === 'Вы подписаны' || text === 'Прокачать') {
                div.textContent = 'Стал качком';
                styleButton(channelSubscribedBtn);
            }
        }
    }
}

const observer = new MutationObserver(() => {
    handleFindButtons()
})

observer.observe(document.body, {
    childList: true,
    subtree: true
})