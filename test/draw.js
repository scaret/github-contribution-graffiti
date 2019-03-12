const moment = require("moment");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

let matrix = [
    [0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const main = async function(){
    let start = moment.utc("20180520", "YYYYMMDD");
    for (let dayId in matrix){
        for (let weekId in matrix[dayId]){
            let today = start.clone().add(weekId, 'weeks').add(dayId, 'days').add(12, 'hours');
            for (let i = 0; i < matrix[dayId][weekId]; i++){
                console.log("Week", weekId, "Day", dayId, "Today", today.format('llll'));
                let cmd = `git commit --allow-empty -m "Graffiti" --author="ycy-contribution <103244393@qq.com>" --date "${today.format("ddd DD MMM YYYY HH:mm:ss UTC")}"`;
                console.log(cmd);
                for (var j = 0; j < 1; j++){
                    await exec(cmd);
                }
            }
        }
    }
};

main();

