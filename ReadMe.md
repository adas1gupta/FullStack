# FullStack

Description to be determined. 

## Subheader

GitHub Tutorial

## GitHub Test Branch

This is a branch to test how branches and merging work. 
Hit q to reset after you've used git diff NameofBranch on the main branch

Summarization: 
git checkout (-b NameofBranch)/NameofBranch -> git add file -> git commit -m "msg" -> git push -u origin NameofBranch -> create pull request on GitHub -> merge pull request on GitHub -> git checkout main -> git pull (origin main?) -> git branch -d NameofBranch  

## Merging Master to Branch

When changes are made to main, implement them to Branch and keep working on Branch. 
git commit -am "msg" -> git checkout NameofBranch -> git diff main -> q -> git merge main 
If there's a merge conflict (i.e. code that is different on the same line in both branches), change it directly on the code editor. 
Code editor will first display the code from current branch, then the code from branch being merged in (in this case, main)