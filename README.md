# About

This Lambda code is used to start and stop EC2 instances with the help of instance ID. AWS region is not mandatory. 

See the article mentioned above for the details.

Voila :)

# Using it
```
$ npm install
$ zip -r EC2_Start_Stop.zip *
```

#### Note: Some time your node terminal will through an error zip is not recognised command then manually go inside the code folder and select all file and then zip it.

# Instructions
- IAM Roles (https://github.com/kumardharm/AWS-EC2-Start-Stop-Instance-by-ID/blob/master/README.md#IAM Roles required for Lambda Function) 
- [Steps](https://github.com/kumardharm/AWS-EC2-Start-Stop-Instance-by-ID/blob/master/README.md#steps)

### IAM Roles required for Lambda Function:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "MyStatementId",
            "Effect": "Allow",
            "Action": [
                "ec2:Stop*",
                "ec2:Start*",
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

### Steps:

*   Create a lambda function.
*   Add the script to your lambda function.
*   Navigate to Event Source.
*   Click Add new Event source and Choose Event type as - `EC2 Start Events- Schedule`.
*   Click Add new Event source and Choose Event type as - `EC2 Stop Events- Schedule`.
*   Add two Rule name in CloudWatch, 
	1. Description and Schedule Expression as `cron(30 2 ? * MON-FRI *)` which represents Cron job Schedule to be followed MON-FRI at 08:30 UTC to start EC2.
    2. Description and Schedule Expression as `cron(30 15 ? * MON-FRI *)` which represents Cron job Schedule to be followed MON-FRI at 21:30 UTC to stop EC2.
	

### EC2 Start Events - Schedule

```json
{
  "instances": [
    "i-xxxxxx"
  ],
  "action": "start"
}
```

### EC2 Stop Events - Schedule

```json
{
  "instances": [
    "i-xxxxxx"
  ],
  "action": "stop"
}
```

Action can be one of `stop` or `start`.

# License
The source code is released under MIT License.

Check [LICENSE](https://github.com/kumardharm/AWS-EC2-Start-Stop-by-ID/edit/master/LICENSE) file for more information.
