
with open('src/frontend/css/index.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to keep lines 0-2204 (first 2205 lines)
# And lines 2401 to end (from line 2402 onwards)
# Note: line numbers are 1-based, indices are 0-based.
# Line 2206 is index 2205. We want to exclude it.
# Line 2402 is index 2401. We want to include it.

part1 = lines[:2205]
part2 = lines[2401:]

new_content = "".join(part1 + part2)

with open('src/frontend/css/index.css', 'w', encoding='utf-8') as f:
    f.write(new_content)
