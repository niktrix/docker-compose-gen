# docker-compose-gen
User Interface to create docker compose files

WIP

Notes

Version 2 Compose file

Docker compose defines

```
services
networks
volumes
```


Service configuration reference

```
build                                 object { context,dockerfile,args}
context                               string
dockerfile                            string
args                                  array or dictionary
cap_add, cap_drop                     array
command                               array  ??  https://docs.docker.com/engine/reference/builder/#cmd
cgroup_parent
container_name                        string
devices                               array
depends_on                            array
dns                                   string or array
dns_search                            string or array
entrypoint                            string or array
env_file                              string or array
environment                           array
expose                                array
extends
external_links                        array
extra_hosts                           array
image                                 string
labels                                array
links                                 array     (Link to containers in another service. Either specify both the service name and a link alias (SERVICE:ALIAS), or just the service name.)
logging                               object
network_mode                          string
networks                              array
aliases
pid                                     pid: "host"
ports                                 array
security_opt                          array
stop_signal                           stop_signal: SIGUSR1
ulimits
volumes, volume_driver                  
volumes_from
cpu_shares, cpu_quota, cpuset, domainname, hostname, ipc, mac_address, mem_limit, memswap_limit, privileged, read_only, restart, stdin_open, tty, user, working_dir
```


Volume configuration reference
```
driver
driver_opts
external
```

Network configuration reference
```
driver
driver_opts
ipam
external
```

