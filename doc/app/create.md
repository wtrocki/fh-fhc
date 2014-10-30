fhc-create(1)
=============
## SYNOPSIS

 fhc app create --project=<project> [--title=<title>] [--type=<type>]

## EXAMPLES

  fhc version                                                                                                
  fhc app act --app=1a2b3c --fn=<serverside Function> --data=<data to send> --env=<environment>              Performs an act request on app with id 1a2b3c
  fhc app cloud --app=1a2b3c --path=<serverside path from root> --data=<Data to send> --env=<environment>    Performs a cloud request on app with id 1a2b3c
  fhc app create --project=1a2b3c --title=My New App --type=cloud_nodejs                                     Creates a new hybrid app


## OPTIONS

  --env, -e, -e  Environment within which the request should be performed                                       [required]
  --data         Request body to send thru                                                                      [required]
  --fn           Cloud function name to call                                                                    [required]
  --path         Path of the cloud request                                                                      [required]
  --title, -t    A title for your app                                                                         
  --type, -y     Type of your app - e.g. client_hybrid, client_native_ios, client_native_android, cloud_nodejs  [default: "client_hybrid"]

## DESCRIPTION

Creates an application.
