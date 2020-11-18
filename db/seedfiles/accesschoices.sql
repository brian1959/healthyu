Create TABLE accesspricing (
    maccessID Serial Primary KEY,
    access_name VARCHAR(25),
    access_cost Money

);

INSERT INTO accesspricing  (access_name, access_cost)
VALUES
('Autoimmune',5),
('Environment',10),
('For your Family',10),
('Food Focus',5),
('Pregnancy and Children',5),
('50+',10),
('Men',10),
('Women',10),
('Recipes',40),
('Lonely Vegan',0),
('Nibble',10),
('Snack',25),
('Dine',25),
('Feast',75),
('All Access',165);

