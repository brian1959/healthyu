create table order_header  (Orderid Serial Primary Key, ppid VARCHAR, memid INT, purcost INT, purdate TIMESTAMP);

insert into order_header (memid, ppid, purcost, purdate)

VALUES
(1,'1',10, '2020-10-05'),
(2, '2', 25, '2020-10-06'),
(3, '3', 75, '2020-10-15'),
(1, '4',36, '2020-10-15'); 