#!/usr/bin/env fish

# Check if a year argument is provided
if test (count $argv) -lt 1
    echo "Usage: ./script.fish <year>"
    exit 1
end

# Get the year from the command-line argument
set YEAR $argv[1]

# API Key
set API_KEY "ZAVdqwuySASubByCed5KYuYMzb9uB2f7"

# Base URL
set BASE_URL "https://api.time.ir/v1/event/fa/events/calendar"

# Loop through months 2 to 12
for month in (seq 1 12)
    # Fetch data from API using wget
    set RESPONSE (wget --quiet --no-proxy --header="x-api-key: $API_KEY" --output-document=- "$BASE_URL?year=$YEAR&month=$month")

    # Extract event_list and save to {month}.json
    echo $RESPONSE | jq '.data.event_list' > "$month.json"

    echo "Saved $month.json"
end
