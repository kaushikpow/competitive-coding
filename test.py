def solution (commands):
    dict={};
    for i in range(len(commands)):
        if commands[i][0]=='!':
            temp=commands[i]
            while(temp[0]=="!"):
                king= commands[temp[1]-1]
                if(king[0]!= "!"):
                    break
                else:
                    temp=king
            if(king not in dict):
                dict[king] =1
            else: dict[king]+=1
        else:
            if(commands[i] not in dict):
                dict[commands[i]] =1
            else: dict[commands[i]]+=1
    
    return dict.values

print(solution(["ls","ps","ws","!1", "!2,","!2","!3","!4"]))


            
