var app = null;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('body').data('so',device.platform);

    //adicionar o evento online
    document.addEventListener("online", onOnline, false);
    //adicionar o evento offline
    document.addEventListener("offline", onOffline, false);
    //monitorar o click no backbutton
    document.addEventListener("backbutton", function(e) {

        navigator.notification.confirm(
                'Você realmente deseja sair do aplicativo?',
                exitFromApp,
                'Sair',
                'Não,Sim'
                );

    }, false);
}

function onOffline() {
    showAlert('Sem conexão a internet!');
}

function onOnline() {
    //$("#modal-alert").data("kendoMobileModalView").close();
    //hideLoader();
}

function exitFromApp(buttonIndex) {
    if (buttonIndex == 2) {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    }
}

function onClickToPlayer() {
//    try {
//        var so =$('body').data('so');
//        if (so == 'Android')
//            window.open(config_streaming.url.Android, '_system');
//        else if (so == 'iOS'){
//            window.open(config_streaming.url.iOS);
//            //$('#player').html('<video src="'+config_streaming.url.iOS+'"></video>');
//        }
//        return false;
//    }
//    catch (e) {
//        alert('Erro: ' + e.message);
//    }
}