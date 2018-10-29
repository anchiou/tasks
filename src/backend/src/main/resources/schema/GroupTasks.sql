CREATE TABLE IF NOT EXISTS GroupTasks(
	TaskID CHAR(30) NOT NULL,
	TaskName CHAR(50) NOT NULL,
	`Status` BOOLEAN NOT NULL DEFAULT FALSE,
	Deadline DATE,
	Priority INTEGER,
	Description TEXT,
	AssigneeID CHAR(20) DEFAULT 'everyone',
  ListID CHAR(30) NOT NULL,
	PRIMARY KEY(TaskID),
	FOREIGN KEY(ListID) REFERENCES GroupLists(ListID) ON DELETE CASCADE,
  FOREIGN KEY (AssigneeID) REFERENCES GroupUsers(UserID)
);