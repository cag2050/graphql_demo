/**
 * Created by cag on 2017/2/13.
 */
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
    }
    from 'graphql';

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve(){
                    return 'world';
                }
            }
        }
    })
});