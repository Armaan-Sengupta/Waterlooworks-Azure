function initPopup() {

    browser.storage.sync.get({
        GLB_Enabled: true
    }, function (items) {
        $('#enable-azure').prop('checked', items.GLB_Enabled);
    });

    $('#report-bug').on('click', function (e) {
        e.preventDefault();
        chrome.tabs.create({
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSc8teQisXY9j7mGFWwlNgna5qLqi3kjh31R3iR742oQpJ0fOA/viewform'
        });
    });

    $('#enable-azure').change(function () {

        browser.storage.sync.set({

            GLB_Enabled: $(this).is(':checked')

        }, function () {

            $('#azure-toast').removeClass('azure-toast-hidden');
            setTimeout(function () {
                $('#azure-toast').addClass('azure-toast-hidden');
            }, 2000);

        });

    });

    $('#more-options').on('click', function () {
        // browser.runtime.openOptionsPage();
        browser.tabs.create({
            url: browser.runtime.getURL('')+'html/options.html'
        });
    });

    $('#open-waterlooworks').on('click', function () {
        browser.tabs.create({
            url: 'https://waterlooworks.uwaterloo.ca'
        });
    });

}

initPopup();