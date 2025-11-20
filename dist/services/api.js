export const fetchSequence = async () => {
    const response = await fetch("dist/timeline/sequence.json?t=" + Date.now());
    return response.json();
};

export const fetchMonthData = async (month) => {
    const response = await fetch(`dist/source/${month}.json?t=` + Date.now());
    return response.json();
};

