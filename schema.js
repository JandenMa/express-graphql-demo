const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema
} = require('graphql');

//hard code
const stu_infos = [{
        id: 1,
        name: 'Tom',
        age: 25,
        sex: true
    },
    {
        id: 2,
        name: 'Jerry',
        age: 19,
        sex: true
    },
    {
        id: 3,
        name: 'Mary',
        age: 22,
        sex: false
    },
    {
        id: 4,
        name: 'Lisa',
        age: 21,
        sex: false
    },
    {
        id: 5,
        name: 'Peter',
        age: 32,
        sex: true
    }
]

const stu_type = new GraphQLObjectType({
    name: 'Student',
    fields: {
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        sex: {
            type: GraphQLBoolean
        },
        age: {
            type: GraphQLInt
        }
    }
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: stu_type,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(v, args) {
                let temp = null;
                stu_infos.forEach(stu => {
                    if (stu.id == args.id) {
                        temp = stu;
                    }
                });
                return temp;
            }
        },
        students: {
            type: new GraphQLList(stu_type),
            resolve(v, args) {
                return stu_infos;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})