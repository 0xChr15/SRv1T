import boto3

s3 = boto3.resource('s3')

# create a new bucket
s3.create_bucket(Bucket='my-new-bucket')

# upload a file
s3.meta.client.upload_file('/tmp/hello.txt', 'my-new-bucket', 'hello.txt')
