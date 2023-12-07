 const User = require('./User');
 const Charactersheet = require('./zcharactersheet');
 const Race = require('./race');
 const FocusPower = require('./FocusPower');
 const Focus = require('./Focus');
 const Origin = require('./Origin');


User.hasMany(Charactersheet,{
    foreignKey:'user_id'
})
Charactersheet.belongsTo(User,{
    foreignKey:'user_id'
})

Focus.hasMany(FocusPower, {
    foreignKey: 'focus_id'
});

FocusPower.belongsTo(Focus, {
    foreignKey: 'focus_id'
});

Charactersheet.hasOne(Race,{
    foreignKey:'race_id'
})
Race.belongsTo(Charactersheet,{
    foreignKey:'race_id'
})

Charactersheet.hasOne(Origin,{
    foreignKey:'origin_id'
})
Origin.belongsTo(Charactersheet,{
    foreignKey:'origin_id'
})

Charactersheet.hasOne(Focus,{
    foreignKey:'focus_id'
})
Focus.belongsTo(Charactersheet,{
    foreignKey:'focus_id'
})

Charactersheet.belongsTo(Race, {
  foreignKey: "race_id",
  targetKey: "race_id",
});


 module.exports = { User, Race, Focus, FocusPower, Origin, Charactersheet };