SELECT * FROM order_detail As d
Join order_header As h ON 
d.ppid = h.ppid
WHERE h.memid = $1;