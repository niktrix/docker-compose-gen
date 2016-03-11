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
build
context
dockerfile
args
cap_add, cap_drop
command
cgroup_parent
container_name
devices
depends_on
dns
dns_search
entrypoint
env_file
environment
expose
extends
external_links
extra_hosts
image
labels
links
logging
network_mode
networks
aliases
pid
ports
security_opt
stop_signal
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

