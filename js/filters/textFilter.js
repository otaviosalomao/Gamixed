angular.module("Gamixed").filter("text", function () {
    return function (items, props) {
        var out = [];
        if (angular.isArray(items)) {
            var keys = Object.keys(props);
            items.forEach(function (item) {                
                var itemMatches = false;
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = RemoveDiacritics(props[prop].toLowerCase());
                    if (RemoveDiacritics(item[prop].toString().toLowerCase()).indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            out = items;
        }
        return out;
    };

    function RemoveDiacritics(string) {
        var translationTable = ["éěÉĚřŘťŤžŽúÚůŮüÜíÍóÓáÁšŠďĎýÝčČňŇäÄĺĹľĽŕŔöÖãÃ", "eeEErRtTzZuUuUuUiIoOaAsSdDyYcCnNaAlLlLrRoOaA"];
        var output = '';
        for (var i = 0; i < string.length; i++) {
            var charPosition = translationTable[0].indexOf(string[i]);
            output += charPosition == -1 ? string[i] : translationTable[1][charPosition];
        }
        return output;
    }
});