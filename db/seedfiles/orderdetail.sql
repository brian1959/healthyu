create table order_detail  (detailid Serial Primary Key, ppid VARCHAR, puritem VARCHAR, stdcost INT);

insert into order_detail (ppid, puritem, stdcost)

VALUES
('1','Nibble',10),
('2', 'Snack', 25),
('3', 'Feast', 75),
('1', 'Autoimmune',5), 
('4','Dine',25),
('4','Snack',10),
('4','Pregnancy',10);