SELECT d.puritem, d.detailid, m.* FROM order_detail As d
Join order_header As h ON 
d.ppid = h.ppid
Join meal_details as m On
d.puritem = m.mtname
WHERE h.memid = $1
order by m.mtname;