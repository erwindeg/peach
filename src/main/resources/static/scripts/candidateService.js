
app.service("candidateService", function($localStorage,$rootScope) {
    this.save = function(candidate){
        $localStorage.candidate = candidate;
    }

    this.newCandidate = function(){
        $localStorage.candidate = {};
        $rootScope.$broadcast('candidate:updated',{});
    }

    this.get = function(){
        var candidate = $localStorage.candidate;
        if ( candidate == null ||  candidate === undefined) {
            return {};
        }
        return candidate;
    }
});