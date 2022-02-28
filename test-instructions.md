# Bossjob Frontend Test

## Instruction
Please implement the job list page as per design (job-list-design.jpg). 
Please use this git repository as a starter kit. This has been created using CRA.
**UI library is strongly discouraged**.

The app should be able to do as follow:
1. Listing the first 12 jobs
2. Able to search for job by title or company name
3. Use redux && (redux-saga ~~|| redux-thunk~~) to store the application states
4. Pagination is neccessary - reusable component
5. Feel free to upgrade the react version to use hooks
6. There will be additional point by building the project from scratch instead of using CRA (Keep it clean)

## API Endpoint
Please use this provided api to retrieve the job list. 
`https://search.bossjob.com/api/v1/search/job_filter?size=10&query=`

```
size - to specify number of jobs to be retrieved (default is 4)
query - to specify which job title / company name to be retrieved
page - to specify the page to be retrieved

```
------

Below will be the necessary key that you will use from the JSON response

```
{
    "message": "OK",
    "data": {
        "jobs": [
            {
                "id": 17348,
                "degree": "Diploma",
                "job_title": "System Engineer",
                "job_country": "Philippines",
                "job_type": "Full-time",
                "job_location": "Makati",
                "salary_range_from": 30000,
                "salary_range_to": 40000,
                "company_name": "wealth access inc.",
                "company_location": "Makati",
                "xp_lvl": "3 - 5 years",
            }
        ],
        "page": 1,
        "size": 10,
        "total_num": 265,
        "sort": 1

    }
}
```

You could ignore the rest of the keys.

================

