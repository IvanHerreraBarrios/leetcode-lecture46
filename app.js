var findingUsersActiveMinutes = function(logs, k) {
    const map = new Map()
    for(const log of logs.values()){
        const [userId, minute] = log 
        if(!map.has(userId)) map.set(userId, new Set())
        
            const minutesSet = map.get(userId)
            minutesSetSet.add(minute)
    }

    let result = new Array(k).fill(0)
    for(const [userId, minuteSet] of map.entries()){
        const setSize = minuteSet.size
        const index = setSize - 1
        result[index]++
    }

    return result
};

