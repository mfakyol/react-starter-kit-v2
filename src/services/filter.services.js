const orderByDescending  = (array, key) => {
   return array.sort((a, b) => {
        if(a[key] > b[key]){
            return 1
        }
        if(a[key] < b[key]) {
            return -1
        }
        return 0
    });
}

const orderByAscending = (array, key) => {
   return array.sort((a, b) => {
        if(a[key] > b[key]){
            return -1
        }
        if(a[key] < b[key]) {
            return 1
        }
        return 0
    });
}

const filter = (filterType) => {
    if (filterType === 'orderBy') {
        return (array, key, isAscending  = false) => {
            if (isAscending) return orderByAscending(array,key);
            return orderByDescending(array, key)
        }
    }

    if(filterType == 'groupBy') {
        return (array, key) => {
            return array.reduce((result, item) => {
                if(!result[item[key]]){
                    result[item[key]] = [];
                }
                result[item[key]].push(item);
                return result
            }, {});
        }
    }
    return null;
}

export default filter;