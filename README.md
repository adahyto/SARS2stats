 https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics response schema
 {
   "type": "object",
   "properties": {
     "error": {
       "type": "boolean"
     },
     "statusCode": {
       "type": "integer"
     },
     "message": {
       "type": "string"
     },
     "data": {
       "type": "object",
       "properties": {
         "lastChecked": {
           "type": "string",
           "format": "date-time"
         },
         "covid19Stats": {
           "type": "array",
           "items": {
             "type": "object",
             "properties": {
               "province": {
                 "type": "string"
               },
               "country": {
                 "type": "string"
               },
               "lastUpdate": {
                 "type": "string",
                 "format": "style"
               },
               "confirmed": {
                 "type": "integer"
               },
               "deaths": {
                 "type": "integer"
               },
               "recovered": {
                 "type": "integer"
               }
             }
           }
         }
       }
     }
   }
 }
