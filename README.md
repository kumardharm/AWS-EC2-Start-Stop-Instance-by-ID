# About

This Lambda code is used to start and stop EC2 instances with the help of instance ID. AWS region is not mandatory. 

See the article mentioned above for the details.

Voila :)

# Using it
```
$ npm install
$ zip -r EC2_Start_Stop.zip *
```

Note: Some time your node terminal will through an error zip is not recognised command then manuall go inside the code folder and select all file and then 

Read the article for the details.

```json
{
  "instances": [
    "i-xxxxxx"
  ],
  "action": "start"
}
```

Action can be one of `stop` or `start`.

# License
The source code is released under Apache 2 License.

Check [LICENSE](https://github.com/kumardharm/AWS-EC2-Start-Stop-by-ID/edit/master/LICENSE) file for more information.
