CREATE TABLE IF NOT EXISTS UserTasks(
	TaskID INTEGER NOT NULL AUTO_INCREMENT,
	TaskName CHAR(50) NOT NULL,
	`Status` BOOLEAN NOT NULL DEFAULT FALSE,
	Deadline DATE,
	Priority INTEGER,
	Description TEXT,
  ListID INTEGER NOT NULL,
	PRIMARY KEY(TaskID),
	FOREIGN KEY(ListID) REFERENCES UserLists(ListID) ON DELETE CASCADE
);