
function conditionals(dict, name) {
    var count = 0;
    if (dict != null) {
    for (var key in dict) {
        if (key === 'consequent') {
            count++;
            var consequentBody = dict[key].body;
            if (consequentBody != null){
            for (let d of consequentBody) {
                count = count + conditionals(d);
            }

        }
        }
        if (key === 'alternate') {
            count = count + conditionals(key);
        }
    }
    }
    return count;
}
