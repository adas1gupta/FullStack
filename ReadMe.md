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

## Undoing 

git reset (filename) resets the stage of commits (occurs after using git add)
git reset HEAD~(number of commits 1/2/3/... or log hash) -> this only unstages commits 
HEAD is a pointer to the last commit
git log gives log of commits in reverse chronological order
git log -> q (self explanatory)
to remove changes, do git reset --hard log hashtage
fork copies other people's repositories by using fork on another repository on GitHub
Then, pull the fork repository to local machine and do things as normal. 
If you want to modify original repository, push changes to fork, then make a pull request of the original repository. 