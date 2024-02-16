import pandas as pd

# Adjust the path to your Excel file
excel_file_path = '/workspaces/frc_simulator/modeling_output_full.xlsx'
# Specify the sheet name or number if necessary
sheet_name = 'default_1'

# Read the Excel file
df = pd.read_excel(excel_file_path, sheet_name=sheet_name)

# Convert the DataFrame to JSON
json_str = df.to_json(orient='records', indent=4)

# Define the JSON file name
json_file_path = 'modeling_output_full.json'

# Write the JSON string to a file
with open(json_file_path, 'w') as json_file:
    json_file.write(json_str)

print(f'Excel file {excel_file_path} has been converted to JSON and saved as {json_file_path}')
