---
description: Stop the local wiki development server running on port 8080
---

// turbo
1. Kill any process using port 8080:
```
lsof -ti :8080 | xargs kill -9
```
