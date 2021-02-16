export type Choice = {
    text: string
    isAnswer: boolean
}

export type Question = {
    sentence: string
    choices: Choice[]
    explanation: string
    answer: number[],
    categories: Category[]
}

export type Category = 
    "VPC"|
    "ElastiCache"|
    "RDS"|
    "EC2"|
    "ECS"|
    "Lambda"|
    "Kinesis"|
    "Elastic Beanstalk"|
    "Code"|
    "Organizations"|
    "IAM"|
    "AWSアカウント"|
    "Gateway"|
    "Dynamo"|
    "KMS"|
    "ELB"|
    "Auto Scaling"|
    "S3"|
    "CloudFormation"|
    "AWS SAM"|
    "CloudWatch"|
    "SQS"|
    "SNS"|
    "X-Ray"