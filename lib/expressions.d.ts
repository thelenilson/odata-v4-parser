import Utils from "./utils";
import Lexer from "./lexer";
export declare namespace Expressions {
    function commonExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function boolCommonExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function andExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function orExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function leftRightExpr(value: Utils.SourceArray, index: number, expr: string, tokenType: Lexer.TokenType): Lexer.Token;
    function eqExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function neExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function ltExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function leExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function gtExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function geExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function hasExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function inExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function addExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function subExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function mulExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function divExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function modExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function notExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function boolParenExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function parenExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function boolMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function methodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function methodCallExprFactory(value: Utils.SourceArray, index: number, method: string, min?: number, max?: number): Lexer.Token;
    function containsMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function startsWithMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function endsWithMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function lengthMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function indexOfMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function substringMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function substringOfMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function toLowerMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function toUpperMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function trimMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function concatMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function yearMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function monthMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function dayMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function hourMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function minuteMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function secondMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function fractionalsecondsMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function totalsecondsMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function dateMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function timeMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function totalOffsetMinutesMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function minDateTimeMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function maxDateTimeMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function nowMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function roundMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function floorMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function ceilingMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function distanceMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function geoLengthMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function intersectsMethodCallExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function isofExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function castExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function negateExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function firstMemberExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function memberExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function propertyPathExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function inscopeVariableExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function implicitVariableExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function lambdaVariableExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function lambdaPredicateExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function anyExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function allExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function collectionNavigationExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function keyPredicate(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function simpleKey(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function compoundKey(value: Utils.SourceArray, index: number): Lexer.Token;
    function keyValuePair(value: Utils.SourceArray, index: number): Lexer.Token;
    function keyPropertyValue(value: Utils.SourceArray, index: number): Lexer.Token;
    function keyPropertyAlias(value: Utils.SourceArray, index: number): Lexer.Token;
    function singleNavigationExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function collectionPathExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function complexPathExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function singlePathExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function functionExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function boundFunctionExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function functionExprParameters(value: Utils.SourceArray, index: number): Lexer.Token;
    function functionExprParameter(value: Utils.SourceArray, index: number): Lexer.Token;
    function parameterName(value: Utils.SourceArray, index: number): Lexer.Token;
    function parameterAlias(value: Utils.SourceArray, index: number): Lexer.Token;
    function parameterValue(value: Utils.SourceArray, index: number): Lexer.Token;
    function countExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function refExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function valueExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function rootExpr(value: Utils.SourceArray, index: number): Lexer.Token;
}
export default Expressions;