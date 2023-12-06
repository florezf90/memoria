 const User = require('./User');
 const Charactersheet = require('./charactersheet');
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
    foreignKey:'id'
})
Race.belongsTo(Charactersheet,{
    foreignKey:'id'
})

Charactersheet.hasOne(Origin,{
    foreignKey:'id'
})
Origin.belongsTo(Charactersheet,{
    foreignKey:'id'
})

Charactersheet.hasOne(Focus,{
    foreignKey:'id'
})
Focus.belongsTo(Charactersheet,{
    foreignKey:'id'
})

 module.exports = { User, Charactersheet, Race, Focus, FocusPower, Origin };