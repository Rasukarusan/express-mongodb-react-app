## Usage

### Endpoint

http://localhost:9000/orders

```shell
# Index(show all)
$ curl -X GET "http://localhost:9000/orders"

# Show(show by id)
$ curl -X GET "http://localhost:9000/orders/1"

# Upload
$ curl -F file=@package.json http://localhost:9000/orders

# Update
$ curl -X PATCH "http://localhost:9000/orders/1"

# Delete
$ curl -X DELETE "http://localhost:9000/orders/1"
```
