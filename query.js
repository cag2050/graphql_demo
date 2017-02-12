/**
 * Created by cag on 2017/2/13.
 */
var query = '{hello}';

graphql(schema,query).then(result =>{
    console.log(result)
});