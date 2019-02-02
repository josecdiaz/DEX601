echo "Please do not use this in a real production org, because you may lose work :-)"
echo "Exporting scratch orgs..."
sfdx force:data:soql:query -q "SELECT Id, Username FROM ScratchOrgInfo" -r csv -u dhDEX601  > ./ScratchOrgs.csv
cat ./ScratchOrgs.csv
echo "Deleting found scratch Orgs..."
sfdx force:data:bulk:delete -f ./ScratchOrgs.csv -s ScratchOrgInfo -w 10 -u dhDEX601
rm -f ./ScratchOrgs.csv
