 const User = require('./User');
 const Charactersheet = require('./charactersheet');
 const Race = require('./race');
// const Race = require('./Race');
// const FocusPower = require('./FocusPower');
// const Focus = require('./Focus');

User.hasMany(Charactersheet,{
    foreignKey:'user_id'
})
Charactersheet.belongsTo(User,{
    foreignKey:'user_id'
})


// Focus.hasMany(FocusPower, {
//     foreignKey: 'focus_id'
// });

// FocusPower.belongsTo(Focus, {
//     foreignKey: 'focus_id'
// });

 module.exports = { User, Charactersheet, Race}//, Race, Focus, FocusPower };