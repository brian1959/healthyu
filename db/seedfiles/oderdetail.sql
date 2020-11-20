create table order_detail  (detailid Serial Primary Key, ppid VARCHAR, puritem VARCHAR, stdcost INT);

insert into order_detail (ppid, puritem, stdcost)

VALUES
('1','nibble',10),
('2', 'snack', 25),
('3', 'feast', 75),
('1', 'autoimmune',5), 
('4','dine',25),
('4','snack',10),
('4','pregnancy',10);